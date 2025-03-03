import React from 'react';
import { DescriptionProps } from '../../types';
import { Typography } from '@mui/material';

export default function Description(props: DescriptionProps) {
  const { text } = props;

  return (
    <div className={`text-center text-slate-700`}>
      <Typography>{text}</Typography>
    </div>
  );
}
