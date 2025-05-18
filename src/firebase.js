import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyB-9UW4HNZwTRFM20e5fQQ6YQEUSYxWJFI",
  authDomain: "freelancing-website-24010.firebaseapp.com",
  projectId: "freelancing-website-24010",
  storageBucket: "freelancing-website-24010.firebasestorage.app",
  messagingSenderId: "510791121460",
  appId: "1:510791121460:web:4d2e65c6ac18dc012ca861",
  measurementId: "G-W6VVK5JWP0",
  databaseURL: "https://freelancing-website-24010-default-rtdb.firebaseio.com/",
};




const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app, database };
