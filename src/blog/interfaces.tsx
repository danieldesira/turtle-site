export interface GetPostsResponse {
  found?: number;
  posts?: Post[];
}

interface Author {
  login?: string;
  email?: string | boolean;
  name?: string;
  first_name?: string;
  last_name?: string;
  nice_name?: string;
  URL?: string;
  avatar_URL?: string;
  profile_URL?: string;
}

export interface Post {
  ID?: number;
  author?: Author;
  date?: string;
  modified?: string;
  title?: string;
  URL?: string;
  short_url?: string;
  content?: string;
  excerpt?: string;
  slug?: string;
  guid?: string;
  status?: string;
  type?: string;
  featured_image?: string;
}

export interface GetPostRepliesResponse {
  found?: number;
  comments?: Comment[];
}

interface Comment {
  ID?: number;
  date?: string;
  content?: string;
  author?: Author;
}

export interface PostCommentPayload {
  author?: number;
  author_email?: string;
  author_ip?: string;
  author_name?: string;
  author_url?: string;
  author_user_agent?: string;
  content?: string;
  date?: string;
  date_gmt?: string;
  parent?: number;
  post?: number;
  status?: string;
}
