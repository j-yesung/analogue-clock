import { configureStore } from '@reduxjs/toolkit';
import clockSlice from '../modules/clockSlice';

const store = configureStore({
  reducer: {
    clockSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
