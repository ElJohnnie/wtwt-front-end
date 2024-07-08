import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Steps, { StepsProps } from '../../components/core/Steps';

export default {
  title: 'Components/Steps',
  component: Steps,
} as Meta;

const Template: StoryFn<StepsProps> = (args) => <Steps {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: '1',
  hasRange: false,
};

export const WithRange = Template.bind({});
WithRange.args = {
  number: '1',
  hasRange: true,
};
