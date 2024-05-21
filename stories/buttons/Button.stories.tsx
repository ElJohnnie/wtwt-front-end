import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../../components/buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const WithOtherName = Template.bind({});
WithOtherName.args = {
  text: 'With other name Button',
};
