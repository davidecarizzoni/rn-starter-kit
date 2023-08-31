import { useColorScheme } from 'react-native';
import { useMemo } from 'react';
import { darkTheme, lightTheme } from '../constant';
import { Theme } from '../types';

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return useMemo(() => (colorScheme === 'light' ? lightTheme : darkTheme), [colorScheme]);
};
