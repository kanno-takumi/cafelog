// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4UrdEw7kwcgkKqnSbSrFMIirTqeIHVAw",
  authDomain: "cafelog24.firebaseapp.com",
  projectId: "cafelog24",
  storageBucket: "cafelog24.appspot.com",
  messagingSenderId: "906316060352",
  appId: "1:906316060352:web:b0acb40a5c6c875df17f25",
  measurementId: "G-WSC5VN3QY5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage=getStorage(app);
 
console.log(app);