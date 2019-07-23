const colors = {
  primary: {
    inkBlue: '#0000ff',
    green: '#30645e',
    orange: '#ff3e00',
    yellow: '#ebc410',
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
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  shadow: {
    base: '0 1px 3px rgba(48, 100, 94, 0.12), 0 1px 2px rgba(48, 100, 94, 0.24)',
    hover: '0 14px 28px rgba(48, 100, 94, 0.25), 0 10px 10px rgba(48, 100, 94, 0.22)',
  },
  transition: {
    smoothe: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
};

export default theme;
