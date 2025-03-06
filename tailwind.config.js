/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          "pastel-pink": {
            DEFAULT: "hsl(var(--pastel-pink))",
          },
          "pastel-blue": {
            DEFAULT: "hsl(var(--pastel-blue))",
          },
          "pastel-purple": {
            DEFAULT: "hsl(var(--pastel-purple))",
          },
          "pastel-yellow": {
            DEFAULT: "hsl(var(--pastel-yellow))",
          },
          "pastel-green": {
            DEFAULT: "hsl(var(--pastel-green))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          serif: ["Playfair Display", "serif"],
        },
      },
    },
    plugins: [],
  }
  
  