import { Route, Routes } from "react-router-dom";
import { createContext, useContext } from "react";
import Home from "./components/pages/HomePage";
import StartingPage from "./components/pages/StartingPage";
import Question from "./components/Question";
import { useSelector } from "react-redux";
import FinalPage from "./components/pages/FinalPage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

function App() {
  const currentQuestionIndex = useSelector(
    state => state.quizz.currentQuestionIndex
  );

  return (
    <FirebaseContext.Provider value={{ db }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start/' element={<StartingPage />} />
        <Route
          path={`/start/q/${currentQuestionIndex + 1}`}
          element={<Question />}
        />
        <Route path='/final-page' element={<FinalPage />} />
      </Routes>
    </FirebaseContext.Provider>
  );
}

export default App;
