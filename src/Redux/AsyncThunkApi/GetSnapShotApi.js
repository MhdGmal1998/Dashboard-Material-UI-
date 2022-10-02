import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, addDoc, Timestamp, getDoc, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

export default createAsyncThunk(
    'reports/fetch',
    async (_dt, thunkApi) => {

        const query = collection(db, "found_repots")
        console.log("the data change")
        return await onSnapshot(query, (onSnapshotChange) => {
            // alert("The change is Get")
        })
    }
)