import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from './questionSlice';

export const store = configureStore({
  reducer: {
    questions: questionSlice.reducer
  }
});

store.subscribe(() => console.log(store.getState()))