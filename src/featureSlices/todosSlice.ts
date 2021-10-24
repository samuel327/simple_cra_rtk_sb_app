import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface TodosProps {
  isLoading: boolean;
  value: string[];
}

const initialState: TodosProps = {
  isLoading: false,
  value: [],
};

//mimic save todo; now you can use this wherever
export const saveTodo = createAsyncThunk(
  'todos/saveTodo/',
  async (arg: string) => {
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

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (index: number) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          index,
        });
      }, 1000);
    });
    return res;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(saveTodo.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.value.push(action.payload.todo);
    });

    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.value.splice(action.payload.index, 1);
    });
  },
});

export const {} = todosSlice.actions;

export default todosSlice.reducer;
