export interface RangeControlProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export default function RangeControl({
  value,
  min = 0,
  max = 100,
  onChange,
}: RangeControlProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  );
}
