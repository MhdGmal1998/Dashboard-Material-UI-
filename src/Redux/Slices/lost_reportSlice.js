import { createSlice } from "@reduxjs/toolkit";
import FetchLostRepotsApi from "../AsyncThunkApi/FetchLostRepotsApi";
const initialState = {
    lost_reports: []
}
const lost_repotsSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        add: (state, action) => {

        }
    },
    extraReducers: {
        [FetchLostRepotsApi.fulfilled]: (state, action) => {
            console.log('FetchLostRepotsApi.fulfilled')
            state.lost_reports = action.payload
            console.log(state.users)
        },
        [FetchLostRepotsApi.rejected]: (state, action) => {
            console.log('FetchLostRepotsApi.rejected')
        },
        [FetchLostRepotsApi.pending]: (state, action) => {
            console.log('FetchLostRepotsApi.pending')
        }
    }
})
export default lost_repotsSlice.reducer