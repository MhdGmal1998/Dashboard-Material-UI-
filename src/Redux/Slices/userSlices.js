import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: []
}
const userSlcie = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {
            
        }
    }
})


export default userSlcie.reducer