import { StyleProp, View, ViewStyle } from 'react-native';
import { PropsWithChildren } from 'react';
import { FlexProps, StyleProps } from '../../types';
import { useStyleProps } from '../../hooks/useStyleProps';
import { useFlexProps } from '../../hooks/useFlexProps';

type Props = PropsWithChildren<StyleProps & FlexProps & { style?: StyleProp<ViewStyle> }>;

export const Row = ({ children, ...rest }: Props) => {
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
