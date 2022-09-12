// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXlnS-sSRVMLRXNI25pCOCE7UvqTEi_a8",
    authDomain: "devicey-b2cd7.firebaseapp.com",
    projectId: "devicey-b2cd7",
    storageBucket: "devicey-b2cd7.appspot.com",
    messagingSenderId: "634975220408",
    appId: "1:634975220408:web:dec708d996f1aa89dafa4d",
    measurementId: "G-YWJM2FSF1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export { db }
