import { useLoaderData } from "react-router";
import type { Post } from "./interfaces";
import SafeRawHtmlWrapper from "./SafeRawHtml";

function PostPage() {
  const { title, content, author, modified, featured_image } =
    useLoaderData() as Post;
  console.log(featured_image);

  return (
    <div className="flex flex-col gap-3">
      <header
        className="flex justify-center items-center flex-wrap py-38 bg-cover bg-center"
        style={{ backgroundImage: `url(${featured_image})` }}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
      </header>
      <div className="border border-primary rounded-sm overflow-auto p-2 flex flex-col gap-2">
        <SafeRawHtmlWrapper html={content!} />
        <span className="font-light text-lg">{author?.nice_name}</span>
        <span className="font-light text-sm">
          {modified?.replace("T", " ")}
        </span>
      </div>
    </div>
  );
}

export default PostPage;
