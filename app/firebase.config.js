import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Analytics
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.NEXT_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.NEXT_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.NEXT_FIREBASE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.NEXT_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.NEXT_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.NEXT_FIREBASE_APP_ID}`,
  measurementId: `${import.meta.env.NEXT_FIREBASE_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Analytics
const analytics = getAnalytics(app);

// DB
export const db = getFirestore();