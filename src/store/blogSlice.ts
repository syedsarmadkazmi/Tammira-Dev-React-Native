import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Blog } from '~app/types';

interface BlogState {
  blogs: Blog[];
  allBlogs: Blog[];
  loading: boolean;
  error: string | null;
  selectedTags: string[];
  searchQuery: string;
  availableTags: string[];
}

const initialState: BlogState = {
  blogs: [],
  allBlogs: [],
  loading: false,
  error: null,
  selectedTags: [],
  searchQuery: '',
  availableTags: ['tech', 'javascript', 'react', 'typescript'],
};

// Fetch blogs from API
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (_, { getState }) => {
  const { selectedTags, searchQuery } = (getState() as { blog: BlogState }).blog;
  const tagQuery = selectedTags.length > 0 ? `&tags=${selectedTags.join(',')}` : '';
  const searchParam = searchQuery ? `&search=${searchQuery}` : '';

  const response = await axios.get(`http://localhost:3000/api/blogs?page=1&limit=20${tagQuery}${searchParam}`);
  return response.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    toggleTagFilter: (state, action: PayloadAction<string>) => {
      const tag = action.payload;
      state.selectedTags.includes(tag)
        ? (state.selectedTags = state.selectedTags.filter((t) => t !== tag))
        : state.selectedTags.push(tag);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        state.allBlogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch blogs';
      });
  },
});

export const { toggleTagFilter, setSearchQuery, setBlogs } = blogSlice.actions;
export default blogSlice.reducer;
