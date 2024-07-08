import React from 'react';

export interface StepsProps {
  number: string;
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
        className={`size-10 md:size-16 xl:size-18 rounded-full  
          inline-flex items-center justify-center  
          text-white text-[24px] font-bold ${
            isInactive ? 'bg-pink-400' : 'bg-pink-600'
          }`}
      >
        {number}
      </div>
      {hasRange && (
        <div className="w-8 lg:w-24 md:w-16 bg-gray-200 rounded-full invisible md:visible mx-0 h-2.5 md:mx-4 dark:bg-gray-700">
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
