import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonAnswer, {
  ButtonAnswerProps,
} from '../../components/buttons/ButtonAnswer';

export default {
  title: 'Components/ButtonAnswer',
  component: ButtonAnswer,
} as Meta;

const Template: StoryFn<ButtonAnswerProps> = (args) => (
  <ButtonAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'LALA',
};

export const WithOtherName = Template.bind({});
WithOtherName.args = {
  text: 'With other name Button',
};

export const WithCallback = Template.bind({});
WithCallback.args = {
  text: 'With callback',
  callback: () => batatinha(),
};

const batatinha = () => {
  return alert('batatinha');
};
