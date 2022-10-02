import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebaseConfig'
import { collection, addDoc, Timestamp, getDoc, getDocs, doc } from 'firebase/firestore'
export default createAsyncThunk(
    'users/fetch',
    async (_dt, thunkApi) => {
        const { rejectWithValue } = thunkApi
        return await getDocs(collection(db, "users")).then((dt) => {
            const data = []
            dt.forEach((item) => {
                // var varData = []
                // const alovelaceDocumentRef = collection(db, `users/${item.id}/devices`);
                // const DeviceInof = getDocs(alovelaceDocumentRef).then((d) => {
                // d.forEach((i) => {
                //         varData.push({
                //             deviceId: i.id,
                //             ...i.data()
                //         })
                //     })
                //     return varData
                // })

                data.push({
                    id: item.id,
                    ...item.data(),
                    // deviceInfo: DeviceInof
                })
                
            })
            return data
        })
            .catch((error) => {
                console.log(error)
            })
    }
)