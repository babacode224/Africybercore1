/* AfriCyberCore — shared Tailwind (Play CDN) configuration.
   Loaded AFTER the Tailwind CDN script so the scanner picks it up. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary": "#ffb690",
        "secondary-container": "#00a6e0",
        "inverse-primary": "#515f78",
        "tertiary-container": "#2f0f00",
        "on-tertiary-fixed": "#341100",
        "on-primary": "#233148",
        "primary-fixed": "#d6e3ff",
        "surface-dim": "#101415",
        "surface": "#101415",
        "outline-variant": "#44474d",
        "surface-container-low": "#191c1e",
        "surface-border": "#233554",
        "background": "#101415",
        "surface-container-highest": "#323537",
        "error-container": "#93000a",
        "surface-bright": "#363a3b",
        "on-tertiary": "#552100",
        "on-primary-container": "#74829d",
        "primary-container": "#0a192f",
        "on-secondary-fixed-variant": "#004c69",
        "secondary-fixed-dim": "#7bd0ff",
        "on-surface-variant": "#c5c6cd",
        "on-error": "#690005",
        "outline": "#8f9097",
        "on-surface": "#e0e3e5",
        "surface-tint": "#b9c7e4",
        "on-primary-fixed-variant": "#39475f",
        "on-secondary": "#00354a",
        "cyber-glow": "rgba(56, 189, 248, 0.15)",
        "on-error-container": "#ffdad6",
        "primary": "#b9c7e4",
        "secondary": "#7bd0ff",
        "tertiary-fixed": "#ffdbca",
        "surface-card": "#112240",
        "surface-container": "#1d2022",
        "on-secondary-fixed": "#001e2c",
        "on-primary-fixed": "#0d1c32",
        "surface-container-lowest": "#0b0f10",
        "surface-container-high": "#272a2c",
        "on-tertiary-container": "#d55e00",
        "success-green": "#10B981",
        "on-secondary-container": "#00374d",
        "inverse-surface": "#e0e3e5",
        "inverse-on-surface": "#2d3133",
        "surface-variant": "#323537",
        "secondary-fixed": "#c4e7ff",
        "on-background": "#e0e3e5",
        "primary-fixed-dim": "#b9c7e4",
        "on-tertiary-fixed-variant": "#783200",
        "error": "#ffb4ab",
        "tertiary-fixed-dim": "#ffb690"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "stack-lg": "32px",
        "margin-mobile": "20px",
        "gutter": "24px",
        "section-padding": "120px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "container-max": "1280px"
      },
      fontFamily: {
        "label-caps": ["JetBrains Mono"],
        "headline-lg-mobile": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-md": ["Hanken Grotesk"],
        "button-text": ["Hanken Grotesk"]
      },
      fontSize: {
        "label-caps": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.1em", "fontWeight": "500" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "display-lg-mobile": ["40px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "headline-lg": ["48px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "button-text": ["16px", { "lineHeight": "1", "fontWeight": "600" }]
      }
    }
  }
};
