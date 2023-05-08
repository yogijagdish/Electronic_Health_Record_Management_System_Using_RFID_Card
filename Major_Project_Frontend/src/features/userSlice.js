import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:"",
}

export const userSlice = createSlice({
    name: 'get_user_data',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.user = action.payload.user
        },
        unSetUser: (state,action) => {
            state.user = action.payload.user
        }
    }
})

export const {setUser,unSetUser} = userSlice.actions

export default userSlice.reducer