import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, fetchBlogs, setBlogs } from '~app/store';
import { Blog } from '~app/types';
import { SearchInput, BlogCard } from '~app/components';
import { TagList } from '~app/collections';
import { colors } from '~app/services';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export const BlogScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allBlogs, blogs, loading, searchQuery, selectedTags } = useSelector((state: RootState) => state.blog);
  const [refreshing, setRefreshing] = useState(false);

  console.log('blogs ', blogs);

  useEffect(() => {
    //empty search
    if(searchQuery === '') {
      dispatch(setBlogs(allBlogs));
      return;
    }

    //on search query
    const query = searchQuery.toLowerCase();
      const updatedBlogs = allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.sub_title.toLowerCase().includes(query) ||
        blog.slug.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        `${blog.authorDetails.first_name} ${blog.authorDetails.last_name}`
          .toLowerCase()
          .includes(query)
      );

      dispatch(setBlogs(updatedBlogs));
  }, [searchQuery]);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [selectedTags]);


  useEffect(() => {
    dispatch(setBlogs(allBlogs));
  }, [allBlogs]);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']} >
      <View style={styles.header}>
        <SearchInput />
        <TagList />
      </View>
      <View style={styles.list}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <FlatList
            data={blogs}
            keyExtractor={(item: Blog) => item._id}
            renderItem={({ item }) => <BlogCard blog={item} />}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
