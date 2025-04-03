import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const productItemsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    producstList: (state) => {
      state.value = !state.value
    },
  },
})

export const { producstList } = productItemsSlice.actions

export default productItemsSlice.reducer