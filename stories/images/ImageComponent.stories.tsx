import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ImageComponent from '../../components/images/image.component';
import { ImageComponentProps } from '../../types';

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
  title: 'Clube da Luta',
  description:
    'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.',
};
