import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setYourCurrentTeam } from "../../store/slices/quizzSlice";

const StartingPage = () => {
  const { teams } = useSelector(state => state.quizz);
  const [selectedTeam, setSelectedTeam] = useState(null); // State to track the selected team
  const dispatch = useDispatch();

  const handleTeamSelection = teamIndex => {
    setSelectedTeam(teamIndex);
  };

  const handleStartQuiz = () => {
    // Dispatch an action to set the selected team in the Redux store
    if (selectedTeam !== null) {
      dispatch(setYourCurrentTeam(selectedTeam));
    }
  };

  return (
    <div className='h-screen items-center justify-center mx-auto flex flex-col'>
      <div className='flex justify-between w-1/2 mb-5 font-bold'>
        <h3 className='ml-8'>Equipos:</h3>
        <span>Puntos:</span>
      </div>
      <ul className='flex flex-col gap-3 w-1/2'>
        {teams.map((team, index) => (
          <li
            className='flex justify-between'
            key={index}
            style={{ wordBreak: "break-all" }}
          >
            {/* Use radio buttons to allow team selection */}
            <label>
              <input
                type='radio'
                name='teamSelection'
                checked={selectedTeam === team.id}
                onChange={() => handleTeamSelection(team.id)}
              />
              {team.name}
            </label>
            <span className='mr-5'>{team.points}</span>
          </li>
        ))}
      </ul>
      <Link
        onClick={handleStartQuiz}
        className='bg-orange-800 py-2 p-4 w-2/3 text-center mt-10 rounded text-lg text-white'
        disabled={selectedTeam === null}
        to="/start/q/1"
      >
        Empezar el Juego
      </Link>
      <Link
        to='/'
        className='bg-orange-800 py-2 p-4 w-1/4 text-center mt-5 rounded text-lg text-white'
      >
        Atrás
      </Link>
    </div>
  );
};

export default StartingPage;
