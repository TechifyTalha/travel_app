/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        // Define custom colors here
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        // Define custom background images here
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
        // Define custom screen sizes here
      },
      maxWidth: {
        '10xl': '1512px',
        // Define custom maxWidth values here
      },
      borderRadius: {
        '5xl': '40px',
        // Define custom borderRadius values here
      },
      // Define custom button styles
      extend: {
        backgroundColor: {
          'btn_dark_green': '#007f3b', // Dark green color for the button background
        },
        textColor: {
          'btn_dark_green': '#ffffff', // White text color for the button
        },
        // Add any other styles you want for the button
      }
    },
  },
  plugins: [],
};
