import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebaseConfig'
import { collection, addDoc, Timestamp, getDoc, getDocs } from 'firebase/firestore'
export default createAsyncThunk(
    'reports/lost',
    async (_dt, thunkApi) => {
        const { rejectWithValue } = thunkApi
        return await getDocs(collection(db, "lost_repots")).then((dt) => {
            const data = []
            dt.forEach((item) => {
                data.push({
                    id: item.id,
                    ...item.data()
                })
            })
            // console.log(data)
            return data
        })
            .catch((error) => {
                console.log(error)
            })
    }
)