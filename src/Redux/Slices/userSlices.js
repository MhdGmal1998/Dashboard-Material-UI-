import { createSlice } from "@reduxjs/toolkit";
import FetchUserApi from "../AsyncThunkApi/FetchUserApi";
const initialState = {
    users: []
}
const userSlcie = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {

        }
    },
    extraReducers: {
        [FetchUserApi.fulfilled]: (state, action) => {
            console.log('FetchUserApi.fulfilled')
            state.users = action.payload
            // console.log(state.users.deviceInfo)
            // state.users.forEach((element) => {
            //     // console.log(element.deviceInfo)
            //     // console.log(typeof (element.deviceInfo))
            //     element.devicey.then((d) => {
            //         element.deviceInfo = d
                    
            //     })
            // })

            // console.log(state.users)
        },
        [FetchUserApi.rejected]: (state, action) => {
            console.log('FetchUserApi.rejected')
        },
        [FetchUserApi.pending]: (state, action) => {
            console.log('FetchUserApi.pending')
        }
    }
})


export default userSlcie.reducer