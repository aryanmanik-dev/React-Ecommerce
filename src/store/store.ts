import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice';
import productSlice from './features/productSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch