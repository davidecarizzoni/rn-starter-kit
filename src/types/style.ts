import {
  DimensionValue,
  FlexStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

/**
 * Style props
 * @property mt margin-top
 */
export type StyleProps = {
  m?: DimensionValue;
  mt?: DimensionValue;
  mb?: DimensionValue;
  ml?: DimensionValue;
  mr?: DimensionValue;
  mh?: DimensionValue;
  mv?: DimensionValue;
  p?: DimensionValue;
  pt?: DimensionValue;
  pb?: DimensionValue;
  pl?: DimensionValue;
  pr?: DimensionValue;
  ph?: DimensionValue;
  pv?: DimensionValue;
  w?: DimensionValue;
  h?: DimensionValue;
  minW?: DimensionValue;
  minH?: DimensionValue;
  maxW?: DimensionValue;
  maxH?: DimensionValue;
};

export type FlexProps = {
  alignContent?: FlexStyle['alignContent'];
  justifyContent?: FlexStyle['justifyContent'];
  alignSelf?: FlexStyle['alignSelf'];
  alignItems?: FlexStyle['alignItems'];
  rowGap?: FlexStyle['rowGap'];
  gap?: FlexStyle['gap'];
  flexWrap?: FlexStyle['flexWrap'];
};
