type Props = {
  placeholder: string;
  id: string;
  required?: boolean;
  type?: string;
};

function TextInput({
  id,
  placeholder,
  required = false,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      id={id}
      className="border border-primary p-1 rounded-sm w-full"
      name={id}
      placeholder={placeholder}
      required={required}
      aria-required={required}
    />
  );
}

export default TextInput;
