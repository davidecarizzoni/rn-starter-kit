import { View } from 'react-native';
import { PropsWithChildren } from 'react';
import { FlexProps, StyleProps } from '../types/style';
import { useStyleProps } from '../hooks/useStyleProps';
import { useFlexProps } from '../hooks/useFlexProps';

export const Row = ({
  children,
  ...rest
}: PropsWithChildren<StyleProps & FlexProps>) => {
  const styleProps = useStyleProps(rest);
  const flexProps = useFlexProps(rest);

  return (
    <View
      style={{
        ...styleProps,
        ...flexProps,
        flexDirection: 'row',
      }}>
      {children}
    </View>
  );
};
