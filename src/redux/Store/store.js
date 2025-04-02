import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from '../slices/sidebarToggle'

export const store = configureStore({
  reducer: {
    toggle: toggleReducer
  },
})