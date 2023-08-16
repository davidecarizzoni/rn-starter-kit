import { SafeAreaView } from 'react-native';
import { PropsWithChildren } from 'react';

export const ScreenContainer = ({ children }: PropsWithChildren) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
