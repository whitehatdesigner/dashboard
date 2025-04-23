import { createSlice } from '@reduxjs/toolkit'
import { adminProfile } from '../../dummyData/user';

const initialState = {
    isLoggedIn: false,
    currentUser: null,
    adminList: adminProfile
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer;