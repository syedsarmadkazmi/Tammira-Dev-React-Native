import { StyleSheet } from 'react-native';
import { colors, WPX, HPX } from '~app/services';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: WPX(10),
    padding: WPX(16),
    marginVertical: HPX(8),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: WPX(50),
    height: WPX(50),
    borderRadius: WPX(25),
    marginRight: WPX(12),
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: WPX(16),
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontSize: WPX(14),
    color: colors.subText,
  },
  author: {
    fontSize: WPX(12),
    color: colors.placeholder,
  },
  });
