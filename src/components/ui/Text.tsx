import { Text as RNText, TextProps } from 'react-native';

export const Text = ({ ...rest }: TextProps) => {
  return <RNText {...rest} />;
};
