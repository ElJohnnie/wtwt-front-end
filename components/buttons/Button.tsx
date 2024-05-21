import 'stylesButton.module.css';

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e?: any) => void;
}

export default function Button(props: ButtonProps) {
  return <button></button>;
}
