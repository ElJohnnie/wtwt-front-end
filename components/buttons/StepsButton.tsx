import React from 'react';

export interface StepsButtonProps {
  icon: JSX.Element;
  callback?: () => void;
  text?: string;
}

export default function StepsButton(props: StepsButtonProps) {
  const { icon, callback, text } = props;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        className="w-24 h-24 rounded-full  
          inline-flex items-center justify-center  
          text-white text-[24px] font-bold bg-pink-600 hover:bg-pink-800"
        onClick={callback}
      >
        {icon}
      </button>
      <p className="text-[18px] mt-1 text-pink-600">{text}</p>
    </div>
  );
}
