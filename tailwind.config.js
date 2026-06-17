/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tomato: "#E74C3C",
                primary: "#E74C3C",
                surface: "#FFFFFF",
                "on-surface": "#111111",
                "on-surface-variant": "#6B7280",
                "surface-container": "#F3F4F6",
                "surface-container-high": "#E5E7EB",
            },

            fontSize: {
                "headline-lg": "56px",
                "headline-md": "24px",
                "body-lg": "18px",
                "label-md": "14px",
            },

            fontWeight: {
                headline: "700",
                label: "500",
            },

            spacing: {
                gutter: "24px",
                "container-max": "1200px",
            },

            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.08)",
            },

            borderRadius: {
                xl: "16px",
                "2xl": "24px",
                "3xl": "32px",
            },

            animation: {
                "fade-in": "fadeIn 0.6s ease-in-out",
                "slide-up": "slideUp 0.6s ease-in-out",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};