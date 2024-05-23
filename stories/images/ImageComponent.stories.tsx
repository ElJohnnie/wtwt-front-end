import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageComponent, {
  ImageComponentProps,
} from '../../components/images/ImageComponent';

export default {
  title: 'Components/ImageComponent',
  component: ImageComponent,
} as Meta;

const Template: StoryFn<ImageComponentProps> = (args) => (
  <ImageComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
};
