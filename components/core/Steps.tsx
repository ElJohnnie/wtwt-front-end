import React from 'react';

export interface StepsProps {
  number: number;
  hasRange: boolean;
  isEmpty?: boolean;
  asComplete?: boolean;
  isInactive: boolean;
}

export default function Steps(props: StepsProps) {
  const { number, hasRange, asComplete, isEmpty, isInactive } = props;
  return (
    <div className="flex flex-row justify-center items-center">
      <div
        className={`w-24 h-24 rounded-full  
          inline-flex items-center justify-center  
          text-white text-[24px] font-bold ${
            isInactive ? 'bg-pink-400' : 'bg-pink-600'
          }`}
      >
        {number}
      </div>
      {hasRange && (
        <div className="w-36 bg-gray-200 rounded-full h-2.5 ml-4 dark:bg-gray-700">
          <div
            className="bg-pink-600 h-2.5 rounded-full"
            style={
              !isEmpty && !isInactive
                ? { width: asComplete ? '100%' : '50%' }
                : { width: '0%' }
            }
          ></div>
        </div>
      )}
    </div>
  );
}
