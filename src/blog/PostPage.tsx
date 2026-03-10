import { useLoaderData } from "react-router";
import type { GetPostRepliesResponse, Post, WPComUser } from "./interfaces";
import SafeRawHtmlWrapper from "./SafeRawHtml";
import { formatDate } from "./utils";
import CommentSection from "./CommentSection";

function PostPage() {
  const { post, replies, wpUser } = useLoaderData() as {
    post: Post;
    replies: GetPostRepliesResponse;
    wpUser?: WPComUser;
  };

  return (
    <div className="flex flex-col gap-3">
      <header
        className="flex justify-center items-center flex-wrap py-38 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url(${post.featured_image})` }}
      >
        <h2 className="text-2xl font-bold">{post.title}</h2>
      </header>
      <article className="flex flex-col p-2 gap-2">
        <SafeRawHtmlWrapper html={post.content!} />
        <span className="font-light text-lg">{post.author?.nice_name}</span>
        <span className="font-light text-sm">{formatDate(post.modified!)}</span>
      </article>
      <CommentSection replies={replies} user={wpUser!} />
    </div>
  );
}

export default PostPage;
