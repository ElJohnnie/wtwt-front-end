import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonAnswer from '../../components/buttons/ButtonAnswer';
import { ButtonAnswerProps } from '../../types';

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
