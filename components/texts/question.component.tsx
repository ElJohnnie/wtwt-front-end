import React from 'react';
import { QuestionProps } from '../../types';
import Typography from '@mui/material/Typography';

export default function Question(props: QuestionProps) {
  const { text } = props;

  return (
    <div className={`py-2 px-2 md:px-12 rounded-full text-center`}>
      <Typography className="" variant="h2">
        {text}
      </Typography>
    </div>
  );
}
