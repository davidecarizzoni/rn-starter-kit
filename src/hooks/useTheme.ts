import { darkTheme, lightTheme } from '../constant/theme';
import { Theme } from '../types/theme';
import { useColorScheme } from 'react-native';
import { useMemo } from 'react';

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return useMemo(
    () => (colorScheme === 'light' ? lightTheme : darkTheme),
    [colorScheme],
  );
};
