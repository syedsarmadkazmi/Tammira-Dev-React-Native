import React from 'react';
import { View, Text, Image } from 'react-native';
import { Blog } from '~app/types';
import { styles } from './styles';

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: blog.authorDetails.profile_pic_url }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.subtitle}>{blog.sub_title}</Text>
        <Text style={styles.author}>By {blog.authorDetails.first_name} {blog.authorDetails.last_name}</Text>
      </View>
    </View>
  );
};
