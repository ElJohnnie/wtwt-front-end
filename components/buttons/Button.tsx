export interface ButtonProps {
  href?: string;
  text: string;
  callback?: () => any;
}

export default function Button(props: ButtonProps) {
  const { href, text, callback } = props;
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={callback}
    >
      {text}
    </button>
  );
}
