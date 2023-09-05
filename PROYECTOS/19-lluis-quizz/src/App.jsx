import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/HomePage";
import StartingPage from "./components/pages/StartingPage";
import Question from "./components/Question";
import { useSelector } from "react-redux";
import FinalPage from "./components/pages/FinalPage";

function App() {
  const currentQuestionIndex = useSelector(
    state => state.quizz.currentQuestionIndex
  );

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/start/' element={<StartingPage />} />
      <Route path={`/start/q/${currentQuestionIndex + 1}`} element={<Question />} />
      <Route path='/final-page' element={<FinalPage />} />

    </Routes>
  );
}

export default App;
