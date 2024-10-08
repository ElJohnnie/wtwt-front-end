import React from 'react';
import { StepsButtonProps } from '../../types';

export default function StepsButton(props: StepsButtonProps) {
  const { icon, onClick, text, testId } = props;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        className="w-24 h-24 rounded-full  
          inline-flex items-center justify-center  
          text-white text-[24px] font-bold bg-pink-600 hover:bg-pink-800"
        onClick={onClick}
        data-testid={testId}
      >
        {icon}
      </button>
      <p className="text-[18px] mt-1 text-pink-600">{text}</p>
    </div>
  );
}
