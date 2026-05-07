# ==============================================================
#  Rankin Insulation - JPG Resizer + Recompressor
#  Resizes all JPGs to max 1400px wide at 80% quality.
#  Overwrites originals in place. Requires Node.js.
# ==============================================================

$root   = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent $MyInvocation.MyCommand.Path }
$imgDir = Join-Path $root "Images\3d website"

if (-not (Test-Path $imgDir)) {
    Write-Host "ERROR: Images folder not found at: $imgDir" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

$hasNode = $null -ne (Get-Command node -ErrorAction SilentlyContinue)
if (-not $hasNode) {
    Write-Host "ERROR: Node.js not found." -ForegroundColor Red
    Write-Host "Install it from https://nodejs.org then re-run this script." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

$jpgFiles = Get-ChildItem -Path $imgDir -Recurse -Include "*.jpg","*.jpeg"

if ($jpgFiles.Count -eq 0) {
    Write-Host "No JPG files found in: $imgDir" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 0
}

Write-Host ""
Write-Host "  Found $($jpgFiles.Count) JPG files to process." -ForegroundColor Cyan
Write-Host "  Originals will be overwritten in place." -ForegroundColor Yellow
Write-Host ""

# ------------------------------------------------------------------
#  Set up temp npm project with sharp
# ------------------------------------------------------------------
$tempDir = Join-Path $env:TEMP "rankin-resize"
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
Set-Content -Path (Join-Path $tempDir "package.json") -Encoding UTF8 -Value '{"name":"resize","version":"1.0.0"}'

Write-Host "  Installing sharp image library (first run ~60 sec)..." -ForegroundColor Yellow
Push-Location $tempDir
npm install sharp --save-exact
Pop-Location
Write-Host ""

# ------------------------------------------------------------------
#  Write the Node.js resize script
# ------------------------------------------------------------------
$jsPath = Join-Path $tempDir "resize.js"
$jsContent = @'
const sharp = require('sharp');
const fs    = require('fs');

const file    = process.argv[2];
const maxW    = parseInt(process.argv[3]) || 1400;
const quality = parseInt(process.argv[4]) || 80;

(async () => {
  try {
    const origSize = fs.statSync(file).size;
    const tmp = file + '.resizing_tmp';

    await sharp(file)
      .resize({ width: maxW, withoutEnlargement: true })
      .jpeg({ quality: quality, progressive: true, mozjpeg: true })
      .toFile(tmp);

    fs.renameSync(tmp, file);

    const newSize = fs.statSync(file).size;
    process.stdout.write(origSize + ' ' + newSize);
  } catch (e) {
    process.stderr.write(String(e));
    process.exit(1);
  }
})();
'@
Set-Content -Path $jsPath -Encoding UTF8 -Value $jsContent

# ------------------------------------------------------------------
#  Process each file
# ------------------------------------------------------------------
$totalOrig = [long]0
$totalNew  = [long]0
$ok   = 0
$fail = 0

foreach ($file in $jpgFiles) {
    $label = $file.FullName.Replace($imgDir, "").TrimStart("\")

    $output = & node $jsPath $file.FullName 1400 80

    if ($LASTEXITCODE -eq 0 -and $output) {
        $parts   = ($output -split ' ')
        $orig    = [long]$parts[0]
        $new     = [long]$parts[1]
        $totalOrig += $orig
        $totalNew  += $new
        $pct     = if ($orig -gt 0) { [int](100 - ($new / $orig * 100)) } else { 0 }
        $origKB  = [int]($orig / 1024)
        $newKB   = [int]($new  / 1024)
        Write-Host ("  OK   {0,-45} {1,6} KB -> {2,5} KB  (-{3}%)" -f $label, $origKB, $newKB, $pct) -ForegroundColor Green
        $ok++
    } else {
        Write-Host "  FAIL $label" -ForegroundColor Red
        $fail++
    }
}

# ------------------------------------------------------------------
#  Summary
# ------------------------------------------------------------------
$origMB  = [math]::Round($totalOrig / 1MB, 1)
$newMB   = [math]::Round($totalNew  / 1MB, 1)
$savedMB = [math]::Round(($totalOrig - $totalNew) / 1MB, 1)

Write-Host ""
Write-Host "  ----------------------------------------------" -ForegroundColor Cyan
Write-Host "  Processed : $ok files" -ForegroundColor Cyan
Write-Host "  Failed    : $fail files" -ForegroundColor $(if ($fail -gt 0) { "Red" } else { "Cyan" })
Write-Host "  Before    : $origMB MB total" -ForegroundColor Cyan
Write-Host "  After     : $newMB MB total" -ForegroundColor Cyan
Write-Host "  Saved     : $savedMB MB" -ForegroundColor Green
Write-Host "  ----------------------------------------------" -ForegroundColor Cyan
Write-Host ""
Read-Host "  Done. Press Enter to close"
