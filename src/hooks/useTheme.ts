import { darkTheme, lightTheme } from '@src/constant';
import { Theme } from '@src/types';
import { useColorScheme } from 'react-native';
import { useMemo } from 'react';

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return useMemo(
    () => (colorScheme === 'light' ? lightTheme : darkTheme),
    [colorScheme],
  );
};
