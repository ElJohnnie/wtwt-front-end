export interface DescriptionProps {
  textDescription: string;
}

export default function Description(props: DescriptionProps) {
  const { textDescription } = props;

  return <div className={`text-center text-pink-600`}>{textDescription}</div>;
}
