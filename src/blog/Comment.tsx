import SafeRawHtmlWrapper from "./SafeRawHtml";
import { formatDate } from "./utils";

type Props = {
  authorName: string;
  date: string;
  content: string;
  isEven: boolean;
  avatarUrl: string;
};

function Comment({ authorName, date, content, isEven, avatarUrl }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 ${isEven ? "bg-slate-800" : "bg-primary"} text-white p-2 rounded-sm`}
    >
      <SafeRawHtmlWrapper html={content!} />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="w-10 h-10 rounded-sm" src={avatarUrl} alt="" />
          <span className="font-light text-lg">{authorName}</span>
        </div>
        <span className="font-light text-sm">{formatDate(date!)}</span>
      </div>
    </div>
  );
}

export default Comment;
