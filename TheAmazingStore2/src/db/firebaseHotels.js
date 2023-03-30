// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDetYNv4PZ1A8q1Ig0h659qgHEWD0yakuE',
  authDomain: 'theamazingstore2-5c127.firebaseapp.com',
  databaseURL: 'https://theamazingstore2-5c127-default-rtdb.firebaseio.com',
  projectId: 'theamazingstore2-5c127',
  storageBucket: 'theamazingstore2-5c127.appspot.com',
  messagingSenderId: '1083080638091',
  appId: '1:1083080638091:web:95f65fa44ebb7b2954de8e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
