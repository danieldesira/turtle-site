import type { GetPostRepliesResponse } from "./interfaces";
import Comment from "./Comment";
import TextInput from "../forms/TextInput";
import SubmitButton from "../forms/SubmitButton";
import { Form } from "react-router";
import WPLoginButton from "./WPLoginButton";

type Props = { replies: GetPostRepliesResponse };

function CommentSection({ replies }: Props) {
  return (
    <section className="flex flex-col p-2 gap-2">
      <h3 className="text-xl font-bold">Comments</h3>
      {replies.found ? (
        <>
          {replies.comments?.map(({ ID, author, date, content }, index) => (
            <Comment
              key={ID}
              authorName={author?.nice_name ?? ""}
              date={date!}
              content={content!}
              isEven={index % 2 === 0}
            />
          ))}
        </>
      ) : (
        <span>No comments yet... Be the first!</span>
      )}
      <Form method="post" className="flex flex-col gap-2 items-center">
        <h4 className="text-lg font-bold">Add a comment...</h4>
        <WPLoginButton />
        <TextInput id="authorName" placeholder="Your name" required />
        <TextInput type="email" id="authorEmail" placeholder="Your email" />
        <textarea
          name="content"
          className="border border-primary p-2 w-full rounded-sm"
          required
          aria-required
        ></textarea>
        <SubmitButton>Post</SubmitButton>
      </Form>
    </section>
  );
}

export default CommentSection;
