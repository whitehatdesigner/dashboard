import { createSlice } from '@reduxjs/toolkit';
import { ShopProducts } from './ShopProducts';

const initialState = {
  value: ShopProducts, 
  searchTerm: '', 
  currentPage:1,
  itemsPerPage:5,
};

export const productSlices = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; 
      state.currentPage = 1;
    },
    setProducts: (state, action) => {
      state.value = action.payload; 
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    }
  },
});


export const { setSearchTerm, setProducts, setCurrentPage, setItemsPerPage } = productSlices.actions;

export const selectFilterProducts = (state) => {
  const { value, searchTerm } = state.productSlice; 
  if (!searchTerm) return value;

  return value.filter((product) => (
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  ));
};


export const selectPaginatedProducts = (state) => {
  const filtered = selectFilterProducts(state);
  const { currentPage, itemsPerPage } = state.productSlice;
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filtered.slice(startIndex, startIndex + itemsPerPage);
};


export const selectTotalPages = (state) => {
  const filtered = selectFilterProducts(state);
  const { itemsPerPage } = state.productSlice;
  return Math.ceil(filtered.length / itemsPerPage);
};

export default productSlices.reducer;