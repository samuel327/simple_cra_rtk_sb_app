import { FormEvent, useRef } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { saveTodo } from './featureSlices/todosSlice';

function App() {
  const input = useRef<HTMLInputElement>(null);

  const todos = useAppSelector((state) => state.todos.value);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input && input.current && input.current.value) {
      console.log(input.current.value);
      dispatch(saveTodo(input.current.value));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex' }}>
        <input ref={input} />
        <button>Submit</button>
      </div>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </form>
  );
}

export default App;
