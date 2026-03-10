import { useState } from "react";
import SafeRawHtmlWrapper from "./SafeRawHtml";
import { formatDate } from "./utils";
import { Form } from "react-router";

type Props = {
  id: number;
  authorName: string;
  date: string;
  content: string;
  isEven: boolean;
};

function Comment({ id, authorName, date, content, isEven }: Props) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEditClick = () => setIsEditMode(true);

  return (
    <div
      className={`flex flex-col gap-2 ${isEven ? "bg-slate-800" : "bg-primary"} text-white p-2 rounded-sm`}
    >
      {isEditMode ? (
        <Form method="POST">
          <input type="hidden" name="commentId" value={id} />
          <textarea
            name="content"
            className="border border-primary bg-white dark:bg-slate-800 p-2 w-full rounded-sm"
            required
            aria-required
          >
            {content}
          </textarea>
          <button type="submit">Update</button>
        </Form>
      ) : (
        <SafeRawHtmlWrapper html={content!} />
      )}
      <div className="flex justify-between">
        <span className="font-light text-lg">{authorName}</span>
        <span className="font-light text-sm">{formatDate(date!)}</span>
      </div>
      <div className="flex gap-2 justify-end">
        <span
          role="button"
          className="font-bold text-sm cursor-pointer"
          onClick={handleEditClick}
        >
          Edit
        </span>
      </div>
    </div>
  );
}

export default Comment;
