import { createSlice } from "@reduxjs/toolkit";
import UpdateVersionApi from "../AsyncThunkApi/UpdateVersionApi";
const initialState = {
    versionInfo: null
}
const versionInfoSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {

        }
    },
    extraReducers: {
        [UpdateVersionApi.fulfilled]: (state, action) => {
            console.log('UpdateVersionApi.fulfilled')
            state.versionInfo = action.payload
            console.log(state.versionInfo)
        },
        [UpdateVersionApi.rejected]: (state, action) => {
            console.log('UpdateVersionApi.rejected')
        },
        [UpdateVersionApi.pending]: (state, action) => {
            console.log('UpdateVersionApi.pending')
        }
    }
})
export default versionInfoSlice.reducer