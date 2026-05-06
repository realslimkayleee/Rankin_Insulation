# ==============================================================
#  Rankin Insulation - HEIC to JPG Converter
#  Tries Node.js first (heic-convert), then ImageMagick.
#  No system codec required.
# ==============================================================

$root     = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent $MyInvocation.MyCommand.Path }
$imgDir   = Join-Path $root "Images\3d website"
$htmlFile = Join-Path $root "index.html"

if (-not (Test-Path $imgDir)) {
    Write-Host "ERROR: Images folder not found at: $imgDir" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

$heicFiles = Get-ChildItem -Path $imgDir -Recurse -Filter "*.heic"

if ($heicFiles.Count -eq 0) {
    Write-Host "No .heic files found." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 0
}

# Detect tools
$hasNode   = $null -ne (Get-Command node   -ErrorAction SilentlyContinue)
$hasMagick = $null -ne (Get-Command magick -ErrorAction SilentlyContinue)

Write-Host ""
Write-Host "  Files found : $($heicFiles.Count) HEIC files" -ForegroundColor Cyan
Write-Host "  Node.js     : $(if ($hasNode)   { 'found' } else { 'not found' })"
Write-Host "  ImageMagick : $(if ($hasMagick) { 'found' } else { 'not found' })"
Write-Host ""

$ok   = 0
$fail = 0

# ==============================================================
#  METHOD 1 - Node.js + heic-convert (pure JS, no codec needed)
# ==============================================================
if ($hasNode) {

    Write-Host "  Using Node.js + heic-convert..." -ForegroundColor Cyan
    Write-Host ""

    # Set up a small temp npm project
    $tempDir = Join-Path $env:TEMP "rankin-heic-conv"
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
    Set-Content -Path (Join-Path $tempDir "package.json") -Encoding UTF8 -Value '{"name":"hc","version":"1.0.0"}'

    Write-Host "  Installing heic-convert package (first run only, ~30 sec)..." -ForegroundColor Yellow
    Push-Location $tempDir
    npm install heic-convert --save-exact
    Pop-Location
    Write-Host ""

    # Write the small conversion script into the temp folder
    $jsLines = 'const convert = require("heic-convert");'
    $jsLines += "`nconst fs = require(""fs"");"
    $jsLines += "`nconst src = process.argv[2], dst = process.argv[3];"
    $jsLines += "`n(async () => {"
    $jsLines += "`n  try {"
    $jsLines += "`n    const out = await convert({ buffer: fs.readFileSync(src), format: ""JPEG"", quality: 0.92 });"
    $jsLines += "`n    fs.writeFileSync(dst, Buffer.from(out));"
    $jsLines += "`n  } catch (e) { process.stderr.write(String(e)); process.exit(1); }"
    $jsLines += "`n})();"

    $jsPath = Join-Path $tempDir "conv.js"
    Set-Content -Path $jsPath -Encoding UTF8 -Value $jsLines

    foreach ($file in $heicFiles) {
        $jpgPath = [System.IO.Path]::ChangeExtension($file.FullName, ".jpg")
        $label   = $file.FullName.Replace($imgDir, "").TrimStart("\")

        & node $jsPath $file.FullName $jpgPath | Out-Null

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  OK   $label" -ForegroundColor Green
            $ok++
        } else {
            Write-Host "  FAIL $label" -ForegroundColor Red
            $fail++
        }
    }

# ==============================================================
#  METHOD 2 - ImageMagick
# ==============================================================
} elseif ($hasMagick) {

    Write-Host "  Using ImageMagick..." -ForegroundColor Cyan
    Write-Host ""

    foreach ($file in $heicFiles) {
        $jpgPath = [System.IO.Path]::ChangeExtension($file.FullName, ".jpg")
        $label   = $file.FullName.Replace($imgDir, "").TrimStart("\")

        & magick $file.FullName -quality 92 $jpgPath | Out-Null

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  OK   $label" -ForegroundColor Green
            $ok++
        } else {
            Write-Host "  FAIL $label" -ForegroundColor Red
            $fail++
        }
    }

# ==============================================================
#  NO TOOL FOUND
# ==============================================================
} else {

    Write-Host "  No conversion tool found on this machine." -ForegroundColor Red
    Write-Host ""
    Write-Host "  Please install one of the following and re-run:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "    Node.js (best for web devs):" -ForegroundColor White
    Write-Host "      https://nodejs.org/en/download" -ForegroundColor White
    Write-Host ""
    Write-Host "    ImageMagick:" -ForegroundColor White
    Write-Host "      https://imagemagick.org/script/download.php#windows" -ForegroundColor White
    Write-Host "      (check 'Add to PATH' during install)" -ForegroundColor White
    Write-Host ""
    Read-Host "  Press Enter to exit"
    exit 1
}

# ==============================================================
#  Summary + HTML update
# ==============================================================
Write-Host ""
Write-Host "  ----------------------------------------------" -ForegroundColor Cyan
Write-Host "  Converted : $ok" -ForegroundColor Cyan
Write-Host "  Failed    : $fail" -ForegroundColor Cyan
Write-Host "  ----------------------------------------------" -ForegroundColor Cyan
Write-Host ""

if ($ok -gt 0) {
    if (Test-Path $htmlFile) {
        $html    = Get-Content -Path $htmlFile -Raw -Encoding UTF8
        $updated = $html -replace '(?i)\.heic"', '.jpg"'
        Set-Content -Path $htmlFile -Value $updated -Encoding UTF8
        Write-Host "  index.html updated - .heic paths changed to .jpg" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: index.html not found, paths not updated." -ForegroundColor Yellow
    }
} else {
    Write-Host "  index.html was not modified (0 files converted)." -ForegroundColor Yellow
}

Write-Host ""
Read-Host "  Done. Press Enter to close"
