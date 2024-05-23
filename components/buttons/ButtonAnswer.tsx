import { useState } from 'react';

export interface ButtonAnswerProps {
  href?: string;
  text: string;
  callback?: () => any;
}

export default function ButtonAnswer(props: ButtonAnswerProps) {
  const { href, text, callback } = props;
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (callback) {
      callback();
    }
  };

  return (
    <button
      className={`py-2 px-12 rounded-full font-bold text-white ${
        isSelected ? 'bg-pink-400' : 'bg-pink-600 hover:bg-pink-800'
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
