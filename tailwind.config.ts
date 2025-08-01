import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
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
        // Travozom brand colors
        travozom: {
          beige: "#B4A98B",
          "dark-beige": "#9A8F7A",
          "light-beige": "#D4C9AC",
          emerald: "#28A745", // Keep for legacy but prefer brown
          "dark-emerald": "#1E5F2E", // Keep for legacy but prefer brown
          cream: "#F5F5DC",
          gold: "#FFD700",
          "deep-brown": "#5D4E37",
          "dark-brown": "#4A3B2A", // Add darker brown variant
          "light-brown": "#8B7355", // Add lighter brown variant
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        takeoff: {
          "0%": {
            transform: "translateX(-20px) translateY(5px) rotate(-5deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateX(0px) translateY(-2px) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(20px) translateY(-5px) rotate(5deg)",
            opacity: "0.7",
          },
        },
        landing: {
          "0%": {
            transform: "translateX(20px) translateY(-5px) rotate(5deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateX(0px) translateY(-2px) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-20px) translateY(5px) rotate(-5deg)",
            opacity: "0.7",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        takeoff: "takeoff 3s ease-in-out infinite",
        landing: "landing 3s ease-in-out infinite reverse",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "travozom-gradient": "linear-gradient(135deg, #B4A98B 0%, #28A745 100%)",
        "beige-gradient": "linear-gradient(135deg, #B4A98B 0%, #F5F5DC 100%)",
      },
    },
  },
  plugins: [],
}

export default config
