/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textColor: "var(--textColor)",
        secondColor: "var(--secondColor)",
        cardbackground: "var(--cardbackground)",
        sideBarBackground:"var(--sideBarBackground)",
        // grape:"",
      },
    },
  },
  plugins: [],
}

