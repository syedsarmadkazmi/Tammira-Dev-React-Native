import { StyleSheet } from 'react-native';
import { colors, WPX, HPX } from '~app/services';

export const styles = StyleSheet.create({
    tag: {
      backgroundColor: colors.tagBackground,
      borderRadius: WPX(20),
      paddingVertical: HPX(6),
      paddingHorizontal: WPX(12),
      marginRight: WPX(8),
      marginBottom: HPX(8),
    },
    selectedTag: {
      backgroundColor: colors.primary,
    },
    text: {
      color: colors.text,
      fontSize: WPX(14),
    },
    selectedText: {
      color: colors.white,
    },
  });
