/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            colors: {
                jungle: {
                    900: '#064E3B', // Deep Jungle Green (Primary)
                    800: '#065F46',
                    100: '#D1FAE5',
                    50: '#ECFDF5',
                },
                gold: {
                    600: '#D97706', // Islamic Gold (Secondary)
                    500: '#F59E0B',
                    50: '#FFFBEB',
                },
                sand: {
                    50: '#FDFBF7', // Warm Off-White (Background)
                    100: '#F5F5F4',
                    200: '#E7E5E4',
                },
                teal: {
                    500: '#14B8A6', // Vibrant Teal (Accent)
                }
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
            }
        },
    },
    plugins: [],
}
