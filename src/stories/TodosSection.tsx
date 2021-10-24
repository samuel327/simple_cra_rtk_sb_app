import { FC } from 'react';
import { useAppSelector } from '../app/hooks';

export const TodosSection: FC = (props) => {
  const todos = useAppSelector((state) => state.todos.value);
  return (
    <div>
      {todos.map((todo: string, index: number) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};
