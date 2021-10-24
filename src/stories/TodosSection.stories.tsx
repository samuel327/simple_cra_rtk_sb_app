import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { TodosSection } from './TodosSection';

export default {
  title: 'Example/TodosSection',
  component: TodosSection,
} as ComponentMeta<typeof TodosSection>;

const Template: ComponentStory<typeof TodosSection> = (args) => (
  <Provider store={store}>
    <TodosSection />
  </Provider>
);

export const EmptyTodosSection = Template.bind({});
