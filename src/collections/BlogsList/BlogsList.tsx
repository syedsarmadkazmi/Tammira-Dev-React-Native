import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '~app/store';
import { Blog } from '~app/types';
import { BlogCard } from '~app/components';
import { styles } from './styles';

export const BlogList: React.FC = () => {
  const blogs = useSelector((state: RootState) => state.blog.blogs);

  return (
    <FlatList
      data={blogs}
      keyExtractor={(item: Blog) => item._id}
      renderItem={({ item }) => <BlogCard blog={item} />}
      contentContainerStyle={styles.list}
    />
  );
};
