export interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e?: any) => void;
}

export default function Button(props: ButtonProps) {
  const { href, text, onClick } = props;
  return <button>{text}</button>;
}
