

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                'barlow': ['Barlow', 'sans-serif'],

            }
        },
        colors: {
            'josblue': '#3297BF',
            'joslightblue': '#B8E1F1',
            'josyellow': '#F1B71C',
            'joslightorange': '#F0B077',
            'josorange': '#F15E22',
            'white': '#FFFFFF',
        }
    },
    plugins: [],
}
