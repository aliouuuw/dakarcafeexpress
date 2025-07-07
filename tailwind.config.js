module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wwwlorespressocomalto: "var(--wwwlorespressocomalto)",
        "wwwlorespressocombay-of-many": "var(--wwwlorespressocombay-of-many)",
        wwwlorespressocomblack: "var(--wwwlorespressocomblack)",
        "wwwlorespressocomblaze-orange": "var(--wwwlorespressocomblaze-orange)",
        "wwwlorespressocomcod-gray": "var(--wwwlorespressocomcod-gray)",
        "wwwlorespressocomcurious-blue": "var(--wwwlorespressocomcurious-blue)",
        "wwwlorespressocomdove-gray": "var(--wwwlorespressocomdove-gray)",
        "wwwlorespressocomdusty-gray": "var(--wwwlorespressocomdusty-gray)",
        "wwwlorespressocommine-shaft": "var(--wwwlorespressocommine-shaft)",
        "wwwlorespressocompersian-blue": "var(--wwwlorespressocompersian-blue)",
        wwwlorespressocomred: "var(--wwwlorespressocomred)",
        "wwwlorespressocomred-ribbon": "var(--wwwlorespressocomred-ribbon)",
        "wwwlorespressocomresolution-blue":
          "var(--wwwlorespressocomresolution-blue)",
        wwwlorespressocomronchi: "var(--wwwlorespressocomronchi)",
        "wwwlorespressocomscience-blue": "var(--wwwlorespressocomscience-blue)",
        "wwwlorespressocomtree-poppy": "var(--wwwlorespressocomtree-poppy)",
        wwwlorespressocomwhite: "var(--wwwlorespressocomwhite)",
        "wwwlorespressocomwild-sand": "var(--wwwlorespressocomwild-sand)",
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
      fontFamily: {
        "www-lorespresso-com-avenir-next-regular":
          "var(--www-lorespresso-com-avenir-next-regular-font-family)",
        "www-lorespresso-com-avenir-next-regular-strikethrough":
          "var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-family)",
        "www-lorespresso-com-semantic-button":
          "var(--www-lorespresso-com-semantic-button-font-family)",
        "www-lorespresso-com-semantic-emphasis":
          "var(--www-lorespresso-com-semantic-emphasis-font-family)",
        "www-lorespresso-com-semantic-heading-1":
          "var(--www-lorespresso-com-semantic-heading-1-font-family)",
        "www-lorespresso-com-semantic-heading-3":
          "var(--www-lorespresso-com-semantic-heading-3-font-family)",
        "www-lorespresso-com-semantic-heading-4":
          "var(--www-lorespresso-com-semantic-heading-4-font-family)",
        "www-lorespresso-com-semantic-input":
          "var(--www-lorespresso-com-semantic-input-font-family)",
        "www-lorespresso-com-semantic-item":
          "var(--www-lorespresso-com-semantic-item-font-family)",
        "www-lorespresso-com-semantic-link":
          "var(--www-lorespresso-com-semantic-link-font-family)",
        "www-lorespresso-com-semantic-link-underline":
          "var(--www-lorespresso-com-semantic-link-underline-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
