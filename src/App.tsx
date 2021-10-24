import { FormEvent, useRef } from 'react';
import { AppStyles, Header } from './App.styles';
import { useAppDispatch } from './app/hooks';
import { saveTodo } from './featureSlices/todosSlice';
import { InputSection } from './stories/InputSection';
import { TodosSection } from './stories/TodosSection';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef && inputRef.current && inputRef.current.value) {
      dispatch(saveTodo(inputRef.current.value));
      inputRef.current.value = '';
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <Header>
          <div>To Do List: </div>
        </Header>
        <AppStyles>
          <form onSubmit={handleSubmit}>
            <InputSection passedRef={inputRef} />
            <TodosSection />
          </form>
        </AppStyles>
      </div>
    </div>
  );
}

export default App;
