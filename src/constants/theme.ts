// EcoBin Design System Colors
export const COLORS = {
  // Primary Colors
  primary: '#4CAF50', // EcoBin Green
  primaryDark: '#388E3C', // Dark Green
  primaryLight: '#C8E6C9', // Light Green

  // Accent Colors
  earth: '#795548', // Earth Brown
  water: '#2196F3', // Water Blue
  skyLight: '#E3F2FD', // Sky Light Blue

  // Semantic Colors
  success: '#66BB6A',
  warning: '#FFA726',
  error: '#EF5350',
  info: '#42A5F5',

  // Neutral Colors
  background: '#FAFAFA',
  surface: '#FFFFFF',
  border: '#E0E0E0',
  white: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
  textDisabled: '#BDBDBD',

  // Dark Mode
  darkBackground: '#121212',
  darkSurface: '#1E1E1E',
  darkText: '#FFFFFF',
  darkTextSecondary: '#B3B3B3',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 33.6,
  },
  h2: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 26.4,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15.6,
  },
  button: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  dataValue: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
  },
};

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

export const ANIMATIONS = {
  duration: {
    short: 150,
    normal: 250,
    long: 300,
  },
  timing: 'ease-out',
};
