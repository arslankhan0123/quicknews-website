tailwind.config = {
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#2F6EFF',
          800: "#2133D7",
          900: "#2A28B1",
        },
        secondary: {
          900: '#000',
        },
        light: {
          100: '#CAD1E9',
          900: 'rgba(255, 255, 255, 0.9)',
          950: '#fff',
        },
        night: "#1c1775",
        royal: "#4643d8",
        glow: "#5b5ff0",
        brand: "#2e5bff",
        mist: "#ececf7",
        ink: "#241ea8",
      },
      screens: {
        'xs': '475px',       // Mobile Large (e.g., iPhone Pro Max, Samsung Ultra)
        'sm': '640px',       // Small Devices & Small Tablets
        'md': '768px',       // Tablets (Portrait)
        'lg': '1025px',      // Laptops & Tablets (Landscape)
        'xlg': '1200px',
        'xl': '1281px',      // Desktop / Laptops
        '1xl': '1401px',
        '2xl': '1536px',     // Large Desktop Monitors
        '3xl': '1920px',     // Ultra-wide Displays / High-Res Monitors

        // Explicit Device Target Helpers
        'mobile-sm': {'max': '375px'},                 // Small Mobiles Only
        'mobile-only': {'max': '767px'},               // Mobile Screens Only
        'tablet-only': {'min': '768px', 'max': '1023px'}, // Tablet Range Only
      },
      fontFamily: {
        sans: ["Aeonik", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Aeonik", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Aeonik", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'custom-glow': ' -3px -4px 7px 0 rgba(255, 255, 255, 0.15) inset, 4px 38px 62px 0 rgba(255, 255, 255, 0.20)',
        'custom-black': '-3px -4px 7px 0 rgba(255, 255, 255, 0.15) inset, 4px 38px 62px 0 rgba(0, 0, 0, 0.50)',
        'form-input': '0 0 4.835px 0 rgba(0, 0, 0, 0.10), 0 2.418px 19.341px 0 rgba(0, 0, 0, 0.12), 7.253px 7.253px 1.209px -8.462px rgba(255, 255, 255, 0.75) inset, -7.253px -7.253px 1.209px -8.462px rgba(255, 255, 255, 0.80) inset, 2.418px 2.418px 2.418px -1.209px rgba(255, 255, 255, 0.75) inset, -2.418px -2.418px 2.418px -1.209px rgba(255, 255, 255, 0.75) inset, 0 0 2.418px 2.418px rgba(153, 153, 153, 0.15) inset',
        'form': '0 0 4.835px 0 rgba(255, 255, 255, 0.10), 0 4.66px 14.866px 0 rgba(255, 255, 255, 0.62), 7.253px 7.253px 1.209px -8.462px rgba(255, 255, 255, 0.75) inset, -7.253px -7.253px 1.209px -8.462px rgba(255, 255, 255, 0.80) inset, 2.418px 2.418px 2.418px -1.209px rgba(255, 255, 255, 0.75) inset, -2.418px -2.418px 2.418px -1.209px rgba(255, 255, 255, 0.75) inset, 0 0 2.418px 2.418px rgba(153, 153, 153, 0.15) inset, 0 0 2.418px 2.418px #999 inset, 0 0 38.682px 0 #F2F2F2 inset',
      },
    },
  },
};
