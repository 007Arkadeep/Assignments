//import firebaseConfig from '../config';
import firebase from 'firebase/app';
  
const firebaseConfig = { 
  apiKey: "AIzaSyAxqn0PXUg5ZWwzBCG8ZDqz2e566tUW5-Y",
  authDomain: "eathubbiz.firebaseapp.com",
  projectId: "eathubbiz",
  storageBucket: "eathubbiz.appspot.com",
  messagingSenderId: "515339821040",
  appId: "1:515339821040:web:b2d346632772aefb30c735",
  measurementId: "G-TPJ7KLN3JT"
};
  
firebase.initializeApp(firebaseConfig); 
export const auth = firebase.auth();