import { createSlice } from '@reduxjs/toolkit';

const user_data = JSON.parse(window.localStorage.getItem('groc_wdp_user'));
const userState = user_data ? user_data : { token: '', email: '', isAdmin: false };

export const authSlice = createSlice({
    name: 'auth',
    initialState : {...userState},
    reducers: {
        setLogin: (state, action) => {
            window.localStorage.setItem('groc_wdp_user', JSON.stringify(action.payload))
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAdmin = action.payload.isAdmin;
        },
        logoutUser: (state, action) => {
            window.localStorage.removeItem('groc_wdp_user');
            window.location.reload();
            state.user = '';
            state.token = '';
        }
    },
});

export const { logoutUser, setLogin } = authSlice.actions;