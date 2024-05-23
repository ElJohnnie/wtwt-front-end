import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Question, { QuestionProps } from '../../components/texts/Question';

export default {
    title: 'Components/Question',
    component: Question,
  } as Meta;
  
  const Template: StoryFn<QuestionProps> = (args) => <Question {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    text: "Como você está se sentindo?",
  };

  export const AnotherQuestion = Template.bind({});
  AnotherQuestion.args = {
    text: "Qual o seu gênero favorito?",
  };