/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14201A',
          soft: '#55655B',
          faint: '#8A968E',
        },
        // White is the ground. `mist` alternates sections without becoming a
        // second background colour; `edge` is the only hairline value.
        mist: '#F1F6F1',
        edge: '#DCE6DC',
        green: {
          // Nine steps, because the rooms band steps through six of them and
          // still needs room above and below for type and hairlines.
          950: '#07210F',
          900: '#0C2E1E',
          800: '#124027',
          700: '#185332',
          600: '#21683F',
          500: '#2F8551',
          400: '#4CA36C',
          100: '#DCEBE0',
          50: '#F1F7F1',
        },
      },
      // Tailwind's stock opacity scale has gaps (no 15, 35, 45, 55, 65), and a
      // colour modifier that falls in a gap silently produces no declaration at
      // all — `bg-white/92` renders transparent rather than nearly-white. Fill
      // the ramp so every multiple of 5 is real.
      opacity: Object.fromEntries(
        Array.from({ length: 21 }, (_, step) => [step * 5, String((step * 5) / 100)]),
      ),
      fontFamily: {
        // Fraunces carries every headline; Karla does everything else.
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Karla', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        label: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.12em' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,32,26,0.04), 0 14px 30px -20px rgba(20,32,26,0.28)',
        'card-lift': '0 2px 4px rgba(20,32,26,0.05), 0 26px 50px -24px rgba(20,32,26,0.38)',
      },
      maxWidth: {
        shell: '82rem',
        prose: '36rem',
      },
      transitionTimingFunction: {
        settle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(1.25rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // The rooms band deals itself out left to right on load.
        deal: {
          from: { opacity: '0', transform: 'translateY(0.75rem) scaleY(0.88)' },
          to: { opacity: '1', transform: 'translateY(0) scaleY(1)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        deal: 'deal 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
