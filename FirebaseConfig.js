import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAotE4LLx9oW68aZ6KmWufGnH2YSTpXUBw",
  authDomain: "bsnl-e86f2.firebaseapp.com",
  projectId: "bsnl-e86f2",
  storageBucket: "bsnl-e86f2.appspot.com",
  messagingSenderId: "696055476074",
  appId: "1:696055476074:web:e360e080e2e4e401ecff13",
  measurementId: "G-58WNQ4WJE3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };