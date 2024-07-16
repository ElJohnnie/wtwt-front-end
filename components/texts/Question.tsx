import React from 'react';
import { QuestionProps } from '../../types';

export default function Question(props: QuestionProps) {
  const { text } = props;

  return (
    <div
      className={`py-2 px-2 md:px-12 rounded-full font-bold text-pink-600 text-center text-2xl md:text-4xl`}
    >
      {text}
    </div>
  );
}
