import { FC, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import Menu from './assets/vertical_menu.png';
import { TodoItemMenu } from './TodoItemMenu';

export const TodosSection: FC = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>({
    index: -1,
    isOpen: false,
  });
  const todos = useAppSelector((state) => state.todos.value);

  const handleItemClick = (index: number) => {
    setIsMenuOpen((prev: any) => {
      return {
        index: index,
        isOpen: !prev.isOpen,
      };
    });
  };
  return (
    <div>
      {todos.map((todo: string, index: number) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{ marginTop: 6, cursor: 'pointer' }}
            onClick={() => handleItemClick(index)}
          >
            <img src={Menu} alt='menu' width={20} height={20} />
          </div>
          {isMenuOpen.index === index && isMenuOpen.isOpen && (
            <TodoItemMenu index={index} />
          )}
          <p key={index}>{todo}</p>
        </div>
      ))}
    </div>
  );
};
