import type { GetPostRepliesResponse, WPComUser } from "./interfaces";
import Comment from "./Comment";
import SubmitButton from "../forms/SubmitButton";
import { Form } from "react-router";
import WPLoginButton from "./WPLoginButton";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

type Props = { replies: GetPostRepliesResponse; user: WPComUser };

function CommentSection({ replies, user }: Props) {
  const wpOauthToken = useSelector(
    (state: RootState) => state.wpcomToken.value,
  );

  return (
    <section className="flex flex-col p-2 gap-2">
      <h3 className="text-xl font-bold">Comments</h3>
      {replies.found ? (
        <>
          {replies.comments?.map(({ ID, author, date, content }, index) => (
            <Comment
              key={ID}
              avatarUrl={author?.avatar_URL ?? ""}
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
      <h4 className="text-lg font-bold">Add a comment...</h4>
      {wpOauthToken ? (
        <Form method="post" className="flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-sm"
              src={user.avatar_URL}
              alt=""
            />
            <span className="font-bold text-sm">{user.username}</span>
          </div>
          <textarea
            name="content"
            className="border border-primary p-2 w-full rounded-sm"
            required
            aria-required
          ></textarea>
          <SubmitButton>Post</SubmitButton>
        </Form>
      ) : (
        <WPLoginButton />
      )}
    </section>
  );
}

export default CommentSection;
