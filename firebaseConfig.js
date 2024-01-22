import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA5UHVPsVPL2OM-yrpjlKuNnIKg2Go3hr4",
    authDomain: "magangti-2a8e4.firebaseapp.com",
    databaseURL: "https://magangti-2a8e4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "magangti-2a8e4",
    storageBucket: "magangti-2a8e4.appspot.com",
    messagingSenderId: "549659440007",
    appId: "1:549659440007:web:aaccc795f552d47e6b9922"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export { db, ref, push };