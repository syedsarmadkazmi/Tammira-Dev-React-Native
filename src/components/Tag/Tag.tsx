import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTagFilter, AppDispatch, RootState } from '~app/store';
import { styles } from './styles';

interface TagProps {
  tag: string;
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedTags = useSelector((state: RootState) => state.blog.selectedTags);

  const isSelected = selectedTags.includes(tag);

  return (
    <TouchableOpacity
      style={[styles.tag, isSelected && styles.selectedTag]}
      onPress={() => dispatch(toggleTagFilter(tag))}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>{tag}</Text>
    </TouchableOpacity>
  );
};

