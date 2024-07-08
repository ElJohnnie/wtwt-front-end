import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Description, {
  DescriptionProps,
} from '../../components/texts/Description';

export default {
  title: 'Components/Description',
  component: Description,
} as Meta;

const Template: StoryFn<DescriptionProps> = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Escolha uma opção para o próximo passo',
};
