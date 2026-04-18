import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{css}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1400px",
      // },
    },
    extend: {
      fontFamily: {
        serif: ["Source Serif 4", "serif"],
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        text15: ["15px", { lineHeight: "15px" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        text33: ["33px", { lineHeight: "33px" }],
        text43: ["43px", { lineHeight: "43px" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        normalGray: "#4d50a9",
        navyBlue: "#030e4d",
        darkBlue: "#001aff",
        skyBlue: "#809cff",
        blue: {
          default: "#020084",
          light: "#0099ff",
          dark: "#0052cc",
        },
        navy: {
          50: "#f8f9fc",
          100: "#f0f1f8",
          200: "#e0e2f0",
          300: "#bfc2e0",
          400: "#7a7e9f",
          500: "#5a5f7f",
          600: "#3a3f5f",
          700: "#2a2f4f",
          800: "#1a1f3f",
          900: "#0a0f2f",
        },
        purple: {
          DEFAULT: "#8548DB",
          superLight: "#b989fd",
          light: "#6330aa",
          dark: "#6b2fa8",
        },
        orange: {
          DEFAULT: "#DD8C00",
          light: "#ff9e1a",
          dark: "#b86a00",
        },
        green: {
          revenueGreen: "#00ad7f",
          DEFAULT: "#0FAA81",
          light: "#2dbe99",
          dark: "#0a7e63",
        },
        red: {
          DEFAULT: "#AF3126",
          light: "#c94438",
          dark: "#7f2319",
        },
        cyan: {
          DEFAULT: "#5CE9FF",
        },
        gray: {
          lightGrey: "#8087c2",
          medium: "#5c5f87",
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      backgroundImage: {
        "gradient-cyan-blue": "linear-gradient(to right, #5CE9FF, #001AFF)",
        "gradient-text-dark":
          "linear-gradient(135deg, #5CE9FF 0%, #001AFF 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-left": "scroll-left 20s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;
