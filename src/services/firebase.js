
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBelW8a56XHO429HY8rt20rQfMsK1WZ8D4",
  authDomain: "fsdworkshop.firebaseapp.com",
  projectId: "fsdworkshop",
  storageBucket: "fsdworkshop.firebasestorage.app",
  messagingSenderId: "610640269050",
  appId: "1:610640269050:web:db65148f654354e7a70343",
  measurementId: "G-JGJV6ZFH62"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db=getFirestore(app)
export {db}