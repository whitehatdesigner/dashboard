import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {

        // console.log(state.value);
        // console.log(!state.value);
      state.value = !state.value
    },
  },
})

export const { toggle } = sidebarSlice.actions

export default sidebarSlice.reducer