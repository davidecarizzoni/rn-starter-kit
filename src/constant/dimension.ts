import { Dimensions, Platform } from 'react-native';

export const WIDTH_DEVICE = Dimensions.get('window').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;

export const IS_IOS = Platform.OS === 'ios';
