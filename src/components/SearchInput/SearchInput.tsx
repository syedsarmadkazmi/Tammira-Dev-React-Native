import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch, setSearchQuery } from '~app/store';
import { colors } from '~app/services';
import { styles } from './styles';

export const SearchInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search blogs..."
        placeholderTextColor={colors.placeholder}
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          dispatch(setSearchQuery(text));
        }}
      />
    </View>
  );
};
