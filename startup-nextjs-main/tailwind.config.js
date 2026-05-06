/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        // Stitch Palette
        "on-error": "#690005",
        "on-tertiary": "#4b2800",
        "error-container": "#93000a",
        "inverse-surface": "#e1e3e4",
        "surface-container-highest": "#323536",
        "error": "#ffb4ab",
        "secondary-fixed": "#e2e2e2",
        "tertiary-fixed": "#ffdcc0",
        "on-surface-variant": "#bdc8d1",
        "surface-bright": "#373a3b",
        "surface-variant": "#323536",
        "primary-container": "#00aeef",
        "on-error-container": "#ffdad6",
        "tertiary": "#ffb876",
        "surface-container": "#1d2021",
        "on-surface": "#e1e3e4",
        "on-tertiary-container": "#572f00",
        "primary-fixed": "#c6e7ff",
        "on-primary-fixed-variant": "#004c6b",
        "secondary": "#c6c6c7",
        "on-primary": "#00344b",
        "background": "#111415",
        "on-primary-container": "#003e58",
        "surface-tint": "#82cfff",
        "inverse-primary": "#00658d",
        "primary-fixed-dim": "#82cfff",
        "on-secondary-fixed-variant": "#454747",
        "surface-container-low": "#191c1d",
        "outline-variant": "#3e4850",
        "surface": "#111415",
        "tertiary-fixed-dim": "#ffb876",
        "on-secondary-fixed": "#1a1c1c",
        "surface-container-high": "#282a2b",
        "tertiary-container": "#ea8c21",
        "on-primary-fixed": "#001e2d",
        "surface-container-lowest": "#0c0f10",
        "outline": "#87929b",
        "surface-dim": "#111415",
        "on-secondary-container": "#b4b5b5",
        "secondary-container": "#454747",
        "on-tertiary-fixed-variant": "#6b3b00",
        "on-background": "#e1e3e4",
        "on-secondary": "#2f3131",
        "inverse-on-surface": "#2e3132",
        "secondary-fixed-dim": "#c6c6c7",
        "on-tertiary-fixed": "#2d1600",
        "primary": "#82cfff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "lg": "48px",
        "gutter": "24px",
        "base": "8px",
        "md": "24px",
        "xs": "4px",
        "sm": "12px",
        "container-max": "1280px",
        "xl": "80px"
      },
      fontFamily: {
        "body-md": ["var(--font-manrope)", "sans-serif"],
        "accent-script": ["var(--font-be-vietnam-pro)", "sans-serif"],
        "headline-lg": ["var(--font-work-sans)", "sans-serif"],
        "headline-md": ["var(--font-work-sans)", "sans-serif"],
        "label-sm": ["var(--font-inter)", "sans-serif"],
        "headline-xl": ["var(--font-work-sans)", "sans-serif"],
        "body-lg": ["var(--font-manrope)", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "accent-script": ["20px", {"fontWeight": "500"}],
        "headline-lg": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "label-sm": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "headline-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
      }
    },
  },
  plugins: [],
};
