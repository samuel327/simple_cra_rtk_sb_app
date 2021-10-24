import { FC } from 'react';
import { useAppDispatch } from '../app/hooks';
import { deleteTodo } from '../featureSlices/todosSlice';

interface TodoItemMenuProps {
  index: number;
}
export const TodoItemMenu: FC<TodoItemMenuProps> = (props) => {
  const { index } = props;

  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: 2,
        zIndex: 100,
        backgroundColor: 'grey',
      }}
    >
      <ul>
        <li>Edit</li>
        <li onClick={handleDelete}>Delete</li>
      </ul>
    </div>
  );
};
