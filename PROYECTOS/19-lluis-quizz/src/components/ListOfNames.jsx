import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addTeam, deleteTeam } from "../store/slices/quizzSlice";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { useFirebase } from "../main";

const ListOfNames = () => {
  const { teams } = useSelector(state => state.quizz);
  const dispatch = useDispatch();

  const { db } = useFirebase();

  const [nombreActual, setNombreActual] = useState("");

  const handleInputChange = event => {
    setNombreActual(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const teamData = { name: nombreActual, points: 0, id: teams.length };
    // Se crea una colección "equipos" y se añade un documento con los datos del equipo
    await setDoc(doc(db, "equipos", nombreActual), teamData);
    // Se envía al estado global los datos
    dispatch(addTeam({ name: nombreActual, points: 0, id: teams.length }));

    setNombreActual("");
  };

  const handleEliminarNombre = async index => {
    await deleteDoc(doc(db, "equipos"));
    dispatch(deleteTeam(index));
  };

  // useEffect(() => {
  //   const getCollectionData = async () => {
  //     try {
  //       const collectionRef = collection(db, "nombre_de_la_coleccion");
  //       const querySnapshot = await getDocs(collectionRef);

  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //         // Puedes hacer algo con los datos aquí
  //       });
  //     } catch (error) {
  //       console.error("Error al obtener datos de Firestore:", error);
  //     }
  //   };

  //   getCollectionData();
  // }, [db]);

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
