import { configureStore } from '@reduxjs/toolkit'
import designSlice from './Slices/designSlice'
import lost_reportSlice from './Slices/lost_reportSlice'
import versoin from './Slices/updateSlice'

import userSlices from './Slices/userSlices'
export default configureStore({
    reducer: {
        users: userSlices,
        design: designSlice,
        lost_reports: lost_reportSlice,
        version: versoin
    }
})