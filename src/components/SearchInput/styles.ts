import { StyleSheet } from 'react-native';
import { colors, WPX, HPX } from '~app/services';

export const styles = StyleSheet.create({
  container: {
    marginVertical: HPX(10),
  },
  input: {
    backgroundColor: colors.inputBackground,
    padding: WPX(12),
    borderRadius: WPX(8),
    color: colors.text,
  },
});
