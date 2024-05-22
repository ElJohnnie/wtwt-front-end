import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../../components/buttons/Button';

export default {
  title: 'Components/ButtonGroup',
  component: Button,
} as Meta;

const ButtonGroupTemplate: StoryFn<ButtonProps> = (args) => (
  <div className="flex space-x-10">
    <Button {...args} />
    <Button {...args} />
    <Button {...args} />
    <Button {...args} />
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
