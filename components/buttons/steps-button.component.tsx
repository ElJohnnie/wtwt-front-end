import React from 'react';
import { StepsButtonProps } from '../../types';
import { Button } from '@mui/material';
import { Redo, Undo, Replay, Home, AddCircle } from '@mui/icons-material';

export default function StepsButton(props: Readonly<StepsButtonProps>) {
  const { type, onClick, testId, text } = props;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ButtonComponent
        type={type}
        onClick={onClick}
        testId={testId}
        text={text}
      />
    </div>
  );
}

function ButtonComponent({
  type,
  onClick,
  testId,
  text,
}: Readonly<StepsButtonProps>) {
  if (type === 'try-again') {
    return (
      <Button variant="contained" onClick={onClick} data-testid={testId}>
        <Replay></Replay>
        <h3>{text}</h3>
      </Button>
    );
  }
  if (type === 'more-results') {
    return (
      <Button variant="contained" onClick={onClick} data-testid={testId}>
        <AddCircle></AddCircle>
        <h3>{text}</h3>
      </Button>
    );
  }
  if (type === 'go-to-start') {
    return (
      <Button variant="contained" onClick={onClick} data-testid={testId}>
        <Home></Home>
        <h3>{text}</h3>
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
  return null;
}
