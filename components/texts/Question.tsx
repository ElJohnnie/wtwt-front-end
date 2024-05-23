export interface QuestionProps {
  text: string;
}

export default function Question(props: QuestionProps) {
  const { text } = props;

  return (
    <div
      className={`py-2 px-12 rounded-full font-bold text-pink-600 text-center text-2xl`}
    >
      {text}
    </div>
  );
}