import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react';
import { ShopProducts } from './ShopProducts';


// const [products, setProducts] = useState();


const initialState = {
  value: ShopProducts,
}

export const productItemsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    producstList: (state) => {
      console.log(state);
      
    },
  },
})

export const { producstList } = productItemsSlice.actions

export default productItemsSlice.reducer