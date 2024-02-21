// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtrXLcm1p0P2J8nl1ulqU8lOjetyDtn-c",
    authDomain: "travelbod-c5a35.firebaseapp.com",
    projectId: "travelbod-c5a35",
    storageBucket: "travelbod-c5a35.appspot.com",
    messagingSenderId: "1036306948303",
    appId: "1:1036306948303:web:e3a98f731bbf3d2408d7ba"
    // apiKey:import.meta.env.VITE_APIKEY,
    // authDomain:import.meta.env.VITE_AUTHDOMAIN,
    // projectId:import.meta.env.VITE_PROJECTID,
    // storageBucket:import.meta.env.STORAGEBUCKET,
    // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
    // appId:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;