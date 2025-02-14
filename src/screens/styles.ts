import { StyleSheet } from 'react-native';
import { colors, WPX, HPX } from '~app/services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      header: {
        paddingHorizontal: WPX(10),
      },
      list: {
        flex: 1,
        paddingHorizontal: WPX(10),
        paddingVertical: HPX(20),
        backgroundColor: colors.backgroundSecondary,
      },
});
