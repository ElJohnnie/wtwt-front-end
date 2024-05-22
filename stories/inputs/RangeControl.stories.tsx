import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RangeControl, {
  RangeControlProps,
} from '../../components/inputs/RangeControl';

export default {
  title: 'Components/RangeControl',
  component: RangeControl,
} as Meta;

const Template: StoryFn<RangeControlProps> = (args) => (
  <RangeControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 0,
  min: 50,
  max: 100,
  onChange: () => 100,
};
