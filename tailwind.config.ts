import { heroui } from "@heroui/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#18181B"
          },
        },
        light: {
          colors: {
            background: "#FCFAF9"
          }
        },
      },
    }),
  ],
};
