import { configureStore } from '@reduxjs/toolkit'
import designSlice from './Slices/designSlice'


import userSlices from './Slices/userSlices'
export default configureStore({
    reducer: {
        users: userSlices,
        design: designSlice
    }
})