import { DimensionValue } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { StyleProps } from '../types';

export const useStyleProps = (
  styleProps: StyleProps,
): {
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  margin?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingBottom?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  padding?: DimensionValue;
  width?: DimensionValue;
  height?: DimensionValue;
  minHeight?: DimensionValue;
  minWidth?: DimensionValue;
  maxWidth?: DimensionValue;
  maxHeight?: DimensionValue;
  borderRadius?: number;
} => {
  const { m, br, mt, mb, ml, mr, mv, mh, p, pt, pb, pl, pr, ph, pv, w, h, minH, minW, maxW, maxH } = styleProps;
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
    borderRadius: br,
  };
};
