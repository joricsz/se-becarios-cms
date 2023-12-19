/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'brand-input': '#ECECEC',
      'brand-blue': '#1F8FF9',
      'brand-blue-dark': '#0C74D7',
      'brand-yellow': '#F2B23C',
      'brand-yellow-dark': '#E89F18',
      'brand-green': '#3D7200',
      'brand-green-dark': '#366301',
      'brand-red': '#D9422D',
      'brand-red-dark': '#C32C18',
      'brand-black': '#121214',
    },
    backgroundImage: {
      gradient: 'linear-gradient(92deg, #F2B23C -16.2%, #1F8FF9 114.08%)',
      'gradient-text': 'linear-gradient(92deg, #F2B23C 35.2%, #1F8FF9 70.08%)',
      'gradient-overlay':
        'linear-gradient(92deg, rgba(242,178,60,0.8) -16.2%, rgba(31,143,249,0.8) 114.08%)',
      login: "url('./assets/login_img.jpeg')",
    },
    backgroundClip: {
      text: 'text',
    },
    textColor: {
      transparent: 'transparent',
      black: '#121214',
      white: '#ECECEC',
      'brand-red': '#D9422D',
    },
    boxShadow: {
      'shadow-db': '0 2px 5px 0 rgba(206,205,205,0.8)',
    },
    borderRadius: {
      login: '0px 0px 160px 0px',
      10: '10px',
      8: '8px',
      'view-btn': '0px 0px 10px 10px',
    },

    extend: {},
  },
  plugins: [],
};
