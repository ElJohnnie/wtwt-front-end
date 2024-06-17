'use client';
import '../styles/globals.css';
import Steps from '../components/core/Steps';
import Question from '../components/texts/Question';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex justify-between flex-row items-center">
        {/* fazer um loop para os steps vindo de um context api*/}
        <Steps
          number="1"
          hasRange={true}
          isInactive={false}
          asComplete={true}
        />
        <Steps
          number="2"
          hasRange={true}
          isInactive={false}
          asComplete={true}
        />
        <Steps
          number="3"
          hasRange={true}
          isInactive={false}
          asComplete={true}
        />
        <Steps
          number="4"
          hasRange={true}
          isInactive={false}
          asComplete={false}
        />
        <Steps number="5" hasRange={false} isInactive={true} />
      </div>
      <div className="flex items-center mt-8">
        <Question text="Teste 123" />
      </div>
      <div className="flex items-center mt-8"></div>
    </main>
  );
}
