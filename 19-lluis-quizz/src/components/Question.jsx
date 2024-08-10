import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentQuestionIndex } from "../store/slices/quizzSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateTeamPoints } from "../store/slices/quizzSlice";

const Question = () => {
  const questions = useSelector(state => state.quizz.questions);
  const currentQuestionIndex = useSelector(
    state => state.quizz.currentQuestionIndex
  );
  const teams = useSelector(state => state.quizz.teams);
  const { questionIndex } = useParams();
  const currentQuestion = parseInt(questionIndex, 10) - 1;
  const dispatch = useDispatch();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleNextQuestion = () => {
    if (
      selectedOptionIndex === questions[currentQuestionIndex].correctOptionIndex
    ) {
      dispatch(updateTeamPoints());
      console.log("correcta");
    }
    // Verificar si hay más preguntas antes de incrementar el índice
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(setCurrentQuestionIndex());
    }

    setSelectedOptionIndex(null);
  };

  const handleOptionSelect = index => {
    // Actualizar el estado local con el índice de la opción seleccionada
    setSelectedOptionIndex(index);
  };

  const isCorrectOption = index => {
    // Verificar si la opción seleccionada es la opción correcta
    return index === questions[currentQuestionIndex].correctOptionIndex;
  };

  return (
    <div className='h-screen justify-center items-center flex'>
      <div className='flex flex-col items-center w-[360px] h-[550px] bg-slate-200'>
        <h2 className='mt-8 text-xl'>Pregunta {currentQuestionIndex + 1}</h2>
        <h3 className='mt-5 text-3xl'>
          {questions[currentQuestionIndex].question}
        </h3>
        <div className='self-start ml-16 mt-6'>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              {/* Usa el radio button para permitir que el usuario seleccione una opción */}
              <input
                type='radio'
                checked={selectedOptionIndex === index}
                onChange={() => handleOptionSelect(index)}
              />
              <span
                className={`mb-4 ${
                  selectedOptionIndex !== null && isCorrectOption(index)
                    ? "text-green-600"
                    : ""
                }`}
              >
                {option}
              </span>
            </div>
          ))}
        </div>
        {currentQuestionIndex < questions.length - 1 ? (
          <Link
            onClick={handleNextQuestion}
            className='bg-orange-800 py-2 p-4 w-2/3 text-center mt-10 rounded text-lg text-white'
            disabled={selectedOptionIndex === null} // Deshabilitar el botón hasta que se seleccione una opción
            to={`/start/q/${currentQuestionIndex + 2}`}
          >
            Siguiente Pregunta
          </Link>
        ) : (
          <Link
            onClick={handleNextQuestion}
            to='/final-page' // Reemplaza "final-page" con la ruta de tu página final
            className='bg-orange-800 py-2 p-4 w-2/3 text-center mt-10 rounded text-lg text-white'
            disabled={selectedOptionIndex === null} // Deshabilitar el botón hasta que se seleccione una opción
          >
            Ir a la Página Final
          </Link>
        )}
      </div>
    </div>
  );
};

export default Question;
