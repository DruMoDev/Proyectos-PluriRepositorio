import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO2PVdkEWTyy7ogJuqesH4uf0HSWMRpbc",
  authDomain: "dru-quizz.firebaseapp.com",
  databaseURL:
    "https://dru-quizz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dru-quizz",
  storageBucket: "dru-quizz.appspot.com",
  messagingSenderId: "935107966107",
  appId: "1:935107966107:web:0449fa01772233412b023e",
  measurementId: "G-K5WMP477JS",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
