import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebaseConfig'
import { collection, addDoc, Timestamp, getDoc, getDocs, updateDoc, setDoc, doc } from 'firebase/firestore'
const FetchVersion = createAsyncThunk(
    'version/fetch',
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


export const updateVersion = createAsyncThunk(
    'version/update',
    async (_dt, thunkApi) => {

        try {
            const { rejectWithValue, dispatch } = thunkApi
            const newRef = doc(db, "updating", "TbfsIy9hlhmUjCeBfOAA");

            return await updateDoc(newRef, {
                message: _dt.msg,
                new_version: _dt.version,
                waring_degree: _dt.mode.toString()
            })
                .then((dt) => {
                    console.log('the update ')
                    dispatch(FetchVersion())
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        catch (er) {
            console.log(er)
        }


    }
)

export default FetchVersion