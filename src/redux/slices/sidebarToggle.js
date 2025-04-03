import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
})

export const { toggle } = sidebarSlice.actions

export default sidebarSlice.reducer