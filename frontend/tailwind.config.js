/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px", // Extra extra small font size
        xs: "12px", // Extra small font size
        sm: "14px", // Small font size
        base: "16px", // Base font size
        lg: "18px", // Large font size
        xl: "20px", // Extra large font size
        "2xl": "24px", // 2x large font size
        "3xl": "30px", // 3x large font size
        "4xl": "36px", // 4x large font size
        "5xl": "48px", // 5x large font size
        "6xl": "60px", // 6x large font size
        "7xl": "72px", // 7x large font size
        "8xl": "96px", // 8x large font size
        "9xl": "128px", // 9x large font size
      },
      colors: {
        primary: {
          light: "#4f8bff", // Lighter blue for hover states
          DEFAULT: "#007bff", // Primary blue for buttons
          dark: "#0056b3", // Darker blue shade
        },
        status: {
          paid: "#34d399", // Green color for "Paid" status
          unpaid: "#f87171", // Red color for "Unpaid" status
        },
        background: {
          light: "#f3f4f6", // Light gray background color
          white: "#ffffff", // Pure white
        },
        text: {
          dark: "#111827", // Dark text color
          muted: "#6b7280", // Muted gray text for secondary information
        },
        white: "#FFFFFF",
        liner: "#605BFF",
        blue: "#0EABEB",
        liteBlue: "#718EBF",
        greyBlue: "#818194",
        liteRed: "#E11D29",
        greyDark: "#4F4F4F",
        grey: "#A7A7A7",
        greyLight: "#D3D3D3",
        greyLighter: "#F4F4F4",
        greyLightest: "#F6F8FB",
        black: "#141414",
        green: "#39973D",
        red: "#E74C3C",
        link: "#5678E9",
        alert: "#FFD351",
      },
      backgroundImage: {
        linerGradient:
          "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "focus", "active"],
      backgroundColor: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
