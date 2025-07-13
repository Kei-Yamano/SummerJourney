import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            h1: {
              color: "#111827",
              fontWeight: "800",
              fontSize: "2.25rem",
              marginTop: "0",
              marginBottom: "2rem",
              lineHeight: "1.1111111",
            },
            h2: {
              color: "#111827",
              fontWeight: "700",
              fontSize: "1.875rem",
              marginTop: "3rem",
              marginBottom: "1.5rem",
              lineHeight: "1.3333333",
            },
            h3: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.5rem",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              lineHeight: "1.6",
            },
            h4: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.25rem",
              marginTop: "2rem",
              marginBottom: "0.75rem",
              lineHeight: "1.5",
            },
            p: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              lineHeight: "1.75",
            },
            ol: {
              listStyleType: "decimal",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              paddingLeft: "1.625rem",
            },
            ul: {
              listStyleType: "disc",
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
              paddingLeft: "1.625rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              lineHeight: "1.75",
            },
            strong: {
              color: "#111827",
              fontWeight: "600",
            },
            a: {
              color: "#2563eb",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
            code: {
              color: "#111827",
              fontWeight: "600",
              fontSize: "0.875rem",
              backgroundColor: "#f1f5f9",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
            },
            pre: {
              color: "#f8fafc",
              backgroundColor: "#1e293b",
              overflowX: "auto",
              fontWeight: "400",
              fontSize: "0.875rem",
              lineHeight: "1.7142857",
              marginTop: "1.7142857em",
              marginBottom: "1.7142857em",
              borderRadius: "0.375rem",
              padding: "0.8571429em 1.1428571em",
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "#111827",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "#d1d5db",
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: "1.6rem",
              marginBottom: "1.6rem",
              paddingLeft: "1rem",
            },
            img: {
              marginTop: "2rem",
              marginBottom: "2rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
