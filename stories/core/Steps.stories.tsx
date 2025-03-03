import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Steps from '../../components/core/steps.component';
import { StepsProps } from '../../types';

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
