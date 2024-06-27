'use client';
import '../styles/globals.css';
import Steps from '../components/core/Steps';
import Question from '../components/texts/Question';
import ButtonAnswer from '../components/buttons/ButtonAnswer';
import Description from '../components/texts/Description';
import StepsButton from '../components/buttons/StepsButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex justify-between flex-row items-center my-4">
        {/* fazer um loop para os steps vindo de um context api*/}
        <Steps
          number="1"
          hasRange={true}
          isInactive={false}
          asComplete={true}
          data-testid="step"
        />
        <Steps
          number="2"
          hasRange={true}
          isInactive={false}
          asComplete={true}
          data-testid="step"
        />
        <Steps
          number="3"
          hasRange={true}
          isInactive={false}
          asComplete={true}
          data-testid="step"
        />
        <Steps
          number="4"
          hasRange={true}
          isInactive={false}
          asComplete={false}
          data-testid="step"
        />
        <Steps
          number="5"
          hasRange={false}
          isInactive={true}
          data-testid="step"
        />
      </div>
      <div className="flex items-center my-12">
        <Question text="Teste 123" data-testid="question" />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        {/* fazer um loop para os steps vindo de um context api*/}
        <ButtonAnswer text="Answer 1" />
        <ButtonAnswer text="Answer 2" />
        <ButtonAnswer text="Answer 3" />
        <ButtonAnswer text="Answer 4" />
        <ButtonAnswer text="Answer 5" />
        <ButtonAnswer text="Answer 6" />
      </div>
      <div className="flex items-center my-12">
        <Description text={'Teste 123'} />
      </div>
      <div className="flex flex-row items-center justify-between w-6/12">
        <div className="mr-2">
          <StepsButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ transform: 'scale(-1, 1)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            }
          />
        </div>
        <div className="ml-2">
          <StepsButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            }
          />
        </div>
      </div>
    </main>
  );
}
