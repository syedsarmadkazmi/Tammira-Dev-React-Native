import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Convert width-based pixel sizes
export const WPX = (size: number) => {
  return PixelRatio.roundToNearestPixel((size * width) / 375);
};

// Convert height-based pixel sizes
export const HPX = (size: number) => {
  return PixelRatio.roundToNearestPixel((size * height) / 812);
};
