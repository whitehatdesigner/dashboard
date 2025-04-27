import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react';
import { ShopProducts } from '../../dummyData/ShopProducts';


// const [products, setProducts] = useState();


const initialState = {
  value: ShopProducts,
}

export const productItemsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    producstList: (state, actions) => {
  
    state.value = actions.payload;    
    },
  },
})

export const { producstList } = productItemsSlice.actions

export default productItemsSlice.reducer