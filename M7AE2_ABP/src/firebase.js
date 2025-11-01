import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCokOlmc_bIJoBV_C6CxRbssRyKLN98s5A",
  authDomain: "reglas-28705.firebaseapp.com",
  projectId: "reglas-28705",
  storageBucket: "reglas-28705.firebasestorage.app",
  messagingSenderId: "230520939101",
  appId: "1:230520939101:web:5da2e2d673d418b66e63b4",
  measurementId: "G-7DGBPK2KE6"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);