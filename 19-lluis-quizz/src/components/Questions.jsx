import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTeamPoints } from '../store/slices/quizzSlice'

const Questions = () => {
const {questions, currentQuestionIndex, teams} = useSelector((state) => state.quizz)
const currentQuestion = questions[currentQuestionIndex]
const [selectedOption, setSelectedOption] = useState(null);
const dispatch = useDispatch()

const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
}

const handleAnswerSubmission = () => {
    if (selectedOption !== null) {
        const selectedOptionIndex = parseInt(selectedOption, 10)
        if (selectedOptionIndex === currentQuestion.correctOptionIndex) {
            const teamId = 0
            const points = 10
            dispatch(updateTeamPoints({teamId, points}))
        }
    }
    setSelectedOption(null)
}
 
if (!currentQuestion) {
    return <div>No hay mas preguntas.</div>
}

  return (
    <div>
    <h2>{currentQuestion.question}</h2>
    <form>
      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio" // Use "checkbox" if you want multiple selections
            name="option"
            value={index}
            checked={selectedOption === index.toString()}
            onChange={handleOptionChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </form>
    <button onClick={handleAnswerSubmission}>Responder</button>
    {currentQuestion.teams}
  </div>
  )
}

export default Questions