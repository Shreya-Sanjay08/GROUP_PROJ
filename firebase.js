// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC6onFdorEpwVGvdqWQ6p5tQo1u_nLkRGg",
//   authDomain: "attendance-41062.firebaseapp.com",
//   databaseURL: "https://attendance-41062-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "attendance-41062",
//   storageBucket: "attendance-41062.firebasestorage.app",
//   messagingSenderId: "774004446167",
//   appId: "1:774004446167:web:31cba8253d0c72445e3192",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

import { initializeApp } from "firebase/app"; 
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6onFdorEpwVGvdqWQ6p5tQo1u_nLkRGg",
  authDomain: "attendance-41062.firebaseapp.com",
  projectId: "attendance-41062",
  storageBucket: "attendance-41062.appspot.com",
  messagingSenderId: "774004446167",
  appId: "1:774004446167:web:31cba8253d0c72445e3192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Function to update the notice in Firestore
export const updateNotice = async (noticeText) => {
  try {
    await setDoc(doc(db, "notices", "latestNotice"), {
      text: noticeText,
      timestamp: new Date(),
    });
    console.log("✅ Notice updated successfully in Firestore!");
  } catch (error) {
    console.error("❌ Error updating notice:", error);
  }
};

export { db, doc, setDoc, getDoc, collection, getDocs };
