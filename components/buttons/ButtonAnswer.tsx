import { useState } from 'react';

interface ButtonAnswerProps {
  text: string;
  selectedAnswer?: string;
  callback?: (value: string) => void;
}

export default function ButtonAnswer(props: ButtonAnswerProps) {
  const { text, callback, selectedAnswer } = props;
  const [isSelected, setIsSelected] = useState(false);
  const validateAnswer = text === selectedAnswer;

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (callback) {
      callback(text);
    }
  };

  return (
    <button
      className={`focus:outline-none focus:ring-4 font-medium text-xl px-8 md:px-12 py-4 lg:px-24 lg:py-5 text-center mb-2 hover:bg-pink-800 focus:bg-pink-900 rounded-full text-white ${
        validateAnswer ? 'bg-pink-900' : 'bg-pink-600'
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
