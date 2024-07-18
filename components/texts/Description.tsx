import React from 'react';
import { DescriptionProps } from '../../types';

export default function Description(props: DescriptionProps) {
  const { text } = props;

  return <div className={`text-center text-pink-600`}>{text}</div>;
}
