import { FlexProps } from '../types/style';

export const useFlexProps = (styleProps: FlexProps): FlexProps => {
  const {
    alignContent,
    justifyContent,
    alignItems,
    alignSelf,
    flexWrap,
    gap,
    rowGap,
  } = styleProps;

  return {
    alignContent,
    justifyContent,
    alignItems,
    alignSelf,
    flexWrap,
    gap,
    rowGap,
  };
};
