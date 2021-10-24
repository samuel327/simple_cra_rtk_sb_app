import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../featureSlices/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
