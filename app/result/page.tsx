'use client';
import React, { FC } from 'react';
import ImageComponent from '../../components/images/ImageComponent';
import StepsButton from '../../components/buttons/StepsButton';

const Result: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-col items-center my-4">
        <ImageComponent
          href="https://community.revelo.com.br/content/images/2023/02/image-1.png"
          title="teste"
          description="teste"
        />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        <StepsButton
          text="Refazer do início"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
          }
        />
        <StepsButton
          text="Outra sugestão"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          }
        />
      </div>
    </main>
  );
};

export default Result;
