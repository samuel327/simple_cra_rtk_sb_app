import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodosProps {
  value: string[];
}

const initialState: TodosProps = {
  value: ['default'],
};

//mimic save todo; now you can use this wherever
export const saveTodo = createAsyncThunk(
  'todos/saveTodo/',
  async (arg: string) => {
    console.log('save todo:', arg);
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        //if arg is saved successful, resolve 'successful'
        resolve({
          todo: arg,
        });
      }, 1000);
    });
    return res;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveTodo.fulfilled, (state, action: any) => {
      console.log('action', action);
      state.value.push(action.payload.todo);
    });
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
