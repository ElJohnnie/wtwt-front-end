import React from 'react';

export interface StepsButtonProps {
  icon: JSX.Element;
  callback?: () => void;
}

export default function StepsButton(props: StepsButtonProps) {
  const { icon, callback } = props;
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        className="w-24 h-24 rounded-full  
          inline-flex items-center justify-center  
          text-white text-[24px] font-bold bg-pink-600 hover:bg-pink-400"
        onClick={callback}
      >
        {icon}
      </button>
    </div>
  );
}
