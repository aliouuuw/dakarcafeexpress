/**
 * DakarCafé Express Utility Functions
 * Utilities for currency formatting, cultural elements, and brand consistency
 */

// FCFA Currency Formatting
export const formatFCFA = (amount: number): string => {
  return new Intl.NumberFormat('fr-SN', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('XOF', 'FCFA');
};

// Convert EUR to FCFA (approximate rate: 1 EUR = 655.957 FCFA)
export const eurToFCFA = (eurAmount: number): number => {
  return Math.round(eurAmount * 655.957);
};

// Product data with FCFA pricing
export const productData = [
  {
    id: 1,
    name: "Capsules Arpeggio",
    description: "Café corsé aux notes intenses - Compatible Nespresso",
    price: 3500,
    image: "/arpeggio-capsules.jpg",
    origin: "Intensité 9",
    intensity: 9,
    inStock: true,
  },
  {
    id: 2,
    name: "Capsules Altissio",
    description: "Café équilibré et aromatique - Compatible Nespresso",
    price: 3500,
    image: "/altissio-capsules.jpg",
    origin: "Intensité 7", 
    intensity: 7,
    inStock: true,
  },
  {
    id: 3,
    name: "Capsules Bianco Leggero",
    description: "Café doux et crémeux - Compatible Nespresso",
    price: 3800,
    image: "/bianco-capsules.jpg",
    origin: "Intensité 5",
    intensity: 5,
    inStock: true,
  },
  {
    id: 4,
    name: "Machine Essenza Mini",
    description: "Machine à café compacte et élégante",
    price: 45000,
    image: "/essenza-mini.jpg",
    origin: "Machine Nespresso",
    intensity: 0,
    inStock: false,
  },
];

// Cultural patterns for decorative elements
export const senegalPatterns = {
  geometric: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B16631' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15z'/%3E%3Cpath d='M30 30l-15-15v30l15-15z'/%3E%3C/g%3E%3C/svg%3E",
  textile: "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23150A05' fill-opacity='0.05'%3E%3Cpath d='M20 20l10-10v20l-10-10z'/%3E%3Cpath d='M20 20l-10-10v20l10-10z'/%3E%3C/g%3E%3C/svg%3E",
};

// Brand colors
export const dakarColors = {
  primary: "#150A05", // Dark brown
  accent: "#B16631", // Light bronze/caramel
  white: "#FFFFFF",
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

// Typography utilities
export const typography = {
  heading1: "text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-[#150A05] leading-tight",
  heading2: "text-3xl md:text-4xl font-semibold font-poppins text-[#150A05] leading-tight",
  heading3: "text-2xl md:text-3xl font-medium font-poppins text-[#150A05] leading-snug",
  heading4: "text-xl md:text-2xl font-medium font-poppins text-[#150A05] leading-snug",
  body: "text-base md:text-lg font-normal font-poppins text-[#404040] leading-relaxed",
  bodySmall: "text-sm md:text-base font-normal font-poppins text-[#525252] leading-relaxed",
  button: "text-base font-medium font-poppins",
  price: "text-xl font-semibold font-poppins text-[#150A05]",
}; 