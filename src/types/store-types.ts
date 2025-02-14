export interface Author {
  _id: string;
  first_name: string;
  last_name: string;
  bio: string;
  profile_pic_url: string;
}

export interface Blog {
  _id: string;
  title: string;
  sub_title: string;
  content: string;
  slug: string;
  tags: string[];
  author: string;
  created_date: string;
  modified_date: string;
  authorDetails: Author;
}
