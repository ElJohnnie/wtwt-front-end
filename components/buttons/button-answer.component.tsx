import React from 'react';
import { ButtonAnswerProps } from '../../types';
import Button from '@mui/material/Button';

export default function ButtonAnswer(props: ButtonAnswerProps) {
  const { text, onClick, selectedAnswer, value } = props;

  const handleClick = () => {
    if (onClick && value) {
      onClick(value);
    }
  };

  return (
    <Button variant="contained" size="large" onClick={handleClick}>
      {text}
    </Button>
  );
}
