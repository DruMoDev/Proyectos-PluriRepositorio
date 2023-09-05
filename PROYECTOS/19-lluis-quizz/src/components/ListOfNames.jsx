import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addTeam, deleteTeam } from "../store/slices/quizzSlice";

const ListOfNames = () => {
  const { teams } = useSelector(state => state.quizz);
  const dispatch = useDispatch();

  const [nombreActual, setNombreActual] = useState("");

  const handleInputChange = event => {
    setNombreActual(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTeam({ name: nombreActual, points: 0, id: teams.length }));
    setNombreActual("");
  };

  const handleEliminarNombre = index => {
    dispatch(deleteTeam(index));
  };

  return (
    <div className='w-10/12  py-8 px-5 bg-gray-200 opacity-95 shadow-sm rounded-lg mx-10 text-black flex flex-col justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center'
      >
        <label>Añade los nombres de los equipos:</label>
        <div className='flex flex-col'>
          <input
            className='border border-black pl-2 py-1 my-3 self-center w-full'
            type='text'
            value={nombreActual}
            onChange={handleInputChange}
          />
          <button
            className='border py-1 px-3 bg-amber-800 rounded text-white mx-auto w-1/2'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      <h2 className='mt-5 text-2xl self-center mb-5'>Equipos:</h2>
      <ul className='max-w-full flex flex-col self-start'>
        {teams.map((team, index) => (
          <li
            className='font-bold flex gap-2 items-center'
            key={index}
            style={{ wordBreak: "break-all" }}
          >
            <div>
              <BsFillPersonFill fontSize={20} />
            </div>
            {team.name}
            <button onClick={() => handleEliminarNombre(index)}>
              <TiDeleteOutline className='text-[15px] text-red-500' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfNames;
