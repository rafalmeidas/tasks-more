import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDojCsJAkukqFs6ALdCjImtonXPmBIO_ME",
  authDomain: "to-do-dashboard-76ee3.firebaseapp.com",
  projectId: "to-do-dashboard-76ee3",
  storageBucket: "to-do-dashboard-76ee3.appspot.com",
  messagingSenderId: "637693992199",
  appId: "1:637693992199:web:3782c0c12477f17fbbf9a2",
  measurementId: "G-2RKEZ6EMFF",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
