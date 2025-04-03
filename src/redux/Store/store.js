import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from '../slices/sidebarToggle'
import productsReducer from '../slices/products'

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    products: productsReducer
  },
})