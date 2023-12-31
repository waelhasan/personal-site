import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightSafeAlternate: 'rgb(var(--light-safe-alternate-bg-val) / <alpha-value>)',
        foregroundRgbImportant: 'rgb(var(--foreground-rgb-important-val) / <alpha-value>)',
        foregroundRgb: 'rgb(var(--foreground-rgb-val) / <alpha-value>)',
        foregroundSectionTitle: 'rgb(var(--foreground-section-title-val) / <alpha-value>)',
        darkerForegroundGolden: 'rgb(var(--darker-foreground-golden-val) / <alpha-value>)',
        golden: 'rgb(var(--foreground-golden-val) / <alpha-value>)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
