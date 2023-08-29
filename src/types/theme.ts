export type Palette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type FontSizes = {
  '2xs': number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
  '7xl': number;
  '8xl': number;
  '9xl': number;
};

type Spacing = {
  [0]: number;
  [0.5]: number;
  [1]: number;
  [1.5]: number;
  [2]: number;
  [2.5]: number;
  [3]: number;
  [3.5]: number;
  [4]: number;
  [5]: number;
  [6]: number;
  [7]: number;
  [8]: number;
  [9]: number;
  [10]: number;
  [12]: number;
  [16]: number;
  [20]: number;
  [24]: number;
  [32]: number;
  [40]: number;
  [48]: number;
  [56]: number;
  [64]: number;
  [72]: number;
  [80]: number;
  [96]: number;
};

type Shapes = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type Colors = {
  primary: string;
  primaryLight: string;
  secondary: string;
  gray: Palette;
  red: Palette;
};

export type Theme = {
  colors: Colors;
  spacing: Spacing;
  shapes: Shapes;
  fontSizes: FontSizes;
};
