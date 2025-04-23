import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || false,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    darkModeToggle: (state) => {
        state.mode = !state.mode;
        localStorage.setItem("darkMode", JSON.stringify(state.mode))
    }
  },
})

// Action creators are generated for each case reducer function
export const { darkModeToggle } = darkModeSlice.actions

export default darkModeSlice.reducer