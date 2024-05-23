import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonAnswer, { ButtonAnswerProps } from '../../components/buttons/ButtonAnswer';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonAnswer,
} as Meta;

const ButtonGroupTemplate: StoryFn<ButtonAnswerProps> = (args) => (
  <div className="flex space-x-10">
    <ButtonAnswer {...args} />
    <ButtonAnswer {...args} />
    <ButtonAnswer {...args} />
    <ButtonAnswer {...args} />
  </div>
);

export const WithCallback = ButtonGroupTemplate.bind({});
WithCallback.args = {
  text: 'With callback',
  callback: () => batatinha(),
};

const batatinha = () => {
  return alert('batatinha');
};
