import Firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDoBeU6kA6nk6eICQ_vGVx6Z4LcyMyr8k0",
    authDomain: "cov19-tracker.firebaseapp.com",
    databaseURL: "https://cov19-tracker.firebaseio.com",
    projectId: "cov19-tracker",
    storageBucket: "cov19-tracker.appspot.com",
    messagingSenderId: "284017502257",
    appId: "1:284017502257:web:d81f08ac2c3c67338c8d10",
    measurementId: "G-QEBH0GNG3J"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics();



export const database = Firebase.database();
