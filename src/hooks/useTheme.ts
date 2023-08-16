import { darkTheme, lightTheme } from '../constant/theme';
import { Theme } from '../types/theme';
import { useColorScheme } from 'react-native';

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'light' ? lightTheme : darkTheme;
};
