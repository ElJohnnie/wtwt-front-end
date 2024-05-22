export interface ButtonProps {
  href?: string;
  text: string;
  callback?: () => any;
}

export default function Button(props: ButtonProps) {
  const { href, text, callback } = props;
  return (
    <button
      className="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-12 rounded-full"
      onClick={callback}
    >
      {text}
    </button>
  );
}
