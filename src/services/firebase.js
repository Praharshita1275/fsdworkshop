
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_jXMnwL9TOGxKir8KySHMlEudrpUOUp4",
  authDomain: "attendencesystem-bf222.firebaseapp.com",
  projectId: "attendencesystem-bf222",
  storageBucket: "attendencesystem-bf222.firebasestorage.app",
  messagingSenderId: "549430660983",
  appId: "1:549430660983:web:c3cd81c6996184ce371b72"
};

const app = initializeApp(firebaseConfig);

const db=getFirestore(app)
export {db}