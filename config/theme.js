const colors = {
  primary: {
    inkBlue: '#0000ff',
  },
  secondary: {
    neonGreen: '#00ff00',
    pink: '#ff00ff',
    red: '#ff0000',
    iceBlue: '#00ffff',
    lightGrey: '#ededed',
    darkGrey: '#878787',
    whiteGrey: '#f6f6f6',
  },
};

const theme = {
  colors,
  layout: {
    small: '52rem',
    medium: '78rem',
    large: '83.33333rem',
  },
  shadow: {
    base: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    hover: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
  transition: {
    card: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
};

export default theme;
