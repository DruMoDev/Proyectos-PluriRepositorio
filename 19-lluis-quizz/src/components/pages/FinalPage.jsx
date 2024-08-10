import React from "react";
import { useSelector } from "react-redux";

const FinalPage = () => {
  const questions = useSelector(state => state.quizz.questions);
  const teams = useSelector(state => state.quizz.teams);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h3 className='mb-10'>Puntuación Final</h3>
      <div className="w-2/3">
        {teams.map((team, index) => (
          <div key={index} className="flex justify-between mb-3">
            <span>{team.name}</span>
            <span>{team.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalPage;
