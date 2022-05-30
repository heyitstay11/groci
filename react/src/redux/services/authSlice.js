import { createSlice } from '@reduxjs/toolkit';

const user_data = JSON.parse(window.localStorage.getItem('groc_wdp_user'));
const userState = user_data ? {token: user_data.token, user: user_data.user } : { token: '', user: '' };

export const authSlice = createSlice({
    name: 'auth',
    initialState : {...userState, loading: false, error: false},
    reducers: {
        setLogin: (state, action) => {
            window.localStorage.setItem('groc_wdp_user', JSON.stringify(action.payload))
            state.user = action.payload.user
            state.token = action.payload.token
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