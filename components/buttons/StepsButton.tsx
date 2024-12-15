import React from 'react';
import { StepsButtonProps } from '../../types';
import { Button } from '@mui/material';
import { Redo, Undo, Replay } from '@mui/icons-material';

export default function StepsButton(props: StepsButtonProps) {
  const { type, onClick, testId } = props;
  const ButtonComponent = () => {
    if (type === 'go-to-start' || type === 'try-again') {
      return (
        <Button variant="contained" onClick={onClick} data-testid={testId}>
          <Replay>Refazer</Replay>
        </Button>
      );
    }
    if (type === 'next-step') {
      return (
        <Button
          variant="contained"
          size="large"
          onClick={onClick}
          data-testid={testId}
        >
          <Redo></Redo>
        </Button>
      );
    }
    if (type === 'prev-step') {
      return (
        <Button
          variant="contained"
          size="large"
          onClick={onClick}
          data-testid={testId}
        >
          <Undo></Undo>
        </Button>
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ButtonComponent />
      {/* <p className="text-[18px] mt-1 text-pink-600">{text}</p> */}
    </div>
  );
}
