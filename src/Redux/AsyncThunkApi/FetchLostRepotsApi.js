import {createAsyncThunk} from '@reduxjs/toolkit'
import { db } from '../../firebaseConfig'
import { collection, addDoc, Timestamp, getDoc, getDocs } from 'firebase/firestore'
export default createAsyncThunk(
    'reports/lost',
    async (_dt,thunkApi)=>{

    }

)