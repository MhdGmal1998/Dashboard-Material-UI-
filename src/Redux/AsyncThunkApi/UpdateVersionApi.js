import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebaseConfig'
import { collection, addDoc, Timestamp, getDoc, getDocs } from 'firebase/firestore'
export default createAsyncThunk(
    'version/update',
    async (_dt, thunkApi) => {

        const { rejectWithValue } = thunkApi
        return await getDocs(collection(db, "updating"))
            .then((dt) => {
                const data = []
                dt.forEach((item) => {
                    data.push({
                        id: item.id,
                        ...item.data()
                    })
                })
                return data[0]
            })
            .catch((error) => {
                console.log(error)
            })
    }
)