import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~app/store';
import { Tag } from '~app/components';
import { styles } from './styles';

export const TagList: React.FC = () => {
  const availableTags = useSelector((state: RootState) => state.blog.availableTags);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {availableTags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </ScrollView>
  );
};