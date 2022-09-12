import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isDrawerOpen: true,
    active: 'home'
}
const designSlice = createSlice({
    name: 'design',
    initialState,
    reducers: {
        add: (state, action) => {

        },
        setDrawer: (state, action) => {
            state.isDrawerOpen = action.payload
        },
        setActiveDrawerList: (state, action) => {
            state.active = action.payload
        }
    }
})


export default designSlice.reducer
export const { setDrawer, setActiveDrawerList } = designSlice.actions