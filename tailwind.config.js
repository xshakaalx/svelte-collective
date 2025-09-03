
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        stone: "#F9F7F4",
        charcoal: "#2B2B2B",
        muted: "#6E6E6E",
        accent: "#B6A179",
        stonegray: "#DCD7D2",
        footer: "#E8E6E2"
      },
      boxShadow: {
        'svelte': '0 8px 30px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        'xl2': '16px'
      }
    }
  },
  plugins: [],
}
