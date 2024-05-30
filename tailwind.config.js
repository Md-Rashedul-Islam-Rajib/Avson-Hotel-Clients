/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      clipPath: {
        'polygon-custom': 'polygon(100% 5%, 15% 5%, 0% 25%, 10% 45%, 100% 45%, 100% 25%)',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

