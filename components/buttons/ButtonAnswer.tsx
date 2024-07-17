import React from 'react';
import { ButtonAnswerProps } from '../../types';

export default function ButtonAnswer(props: ButtonAnswerProps) {
  const { text, callback, selectedAnswer, value } = props;
  const validateAnswer = text === selectedAnswer;

  const handleClick = () => {
    if (callback && value) {
      callback(value);
    }
  };

  return (
    <button
      className={`focus:outline-none focus:ring-4 font-medium text-xl px-8 md:px-12 py-4 lg:px-24 lg:py-5 text-center mb-2 hover:bg-pink-800  rounded-full text-white ${
        validateAnswer ? 'bg-pink-900' : 'bg-pink-600'
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
