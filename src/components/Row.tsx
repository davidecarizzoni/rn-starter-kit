import { View, ViewStyle } from 'react-native';
import { PropsWithChildren } from 'react';
import { StyleProps } from '../types/style';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

const useStyleProps = (styleProps: StyleProps) => {
  const {
    m,
    mt,
    mb,
    ml,
    mr,
    mv,
    mh,
    p,
    pt,
    pb,
    pl,
    pr,
    ph,
    pv,
    w,
    h,
    minH,
    minW,
    maxW,
    maxH,
  } = styleProps;
  return {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    marginVertical: mv,
    marginHorizontal: mh,
    margin: m,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
    paddingVertical: pv,
    paddingHorizontal: ph,
    padding: p,
    width: w,
    height: h,
    minHeight: minH,
    minWidth: minW,
    maxWidth: maxW,
    maxHeight: maxH,
  };
};

export const Row = ({ children, ...rest }: PropsWithChildren<StyleProps>) => {
  const styleProps = useStyleProps(rest);

  return (
    <View
      style={{
        ...styleProps,
        flexDirection: 'row',
      }}>
      {children}
    </View>
  );
};
