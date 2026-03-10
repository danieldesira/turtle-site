import type { PropsWithChildren } from "react";

function SubmitButton({ children }: PropsWithChildren) {
  return (
    <button
    role="button"
      type="submit"
      className="bg-primary rounded-sm w-fit py-2 px-3 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
