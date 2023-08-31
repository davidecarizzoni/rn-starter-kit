import { FlexProps } from '@src/types';

export const useFlexProps = (styleProps: FlexProps): FlexProps => {
  const { alignContent, justifyContent, alignItems, alignSelf, flexWrap, gap, rowGap } = styleProps;

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
