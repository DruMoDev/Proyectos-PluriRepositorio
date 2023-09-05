import ListOfNames from "../ListOfNames";
import { Link } from "react-router-dom";
import backgroundImage from "../../img/background-start.jpg";

const Home = () => {
  return (
    <div
      className=' mx-auto flex flex-col items-center text-orange-300 bg-center bg-cover h-screen '
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className='text-[30px] mt-14 mb-4 rounded px-9 text-center py-5 text-white '>
        ¡Bienvenidos al Quizz sobre Dru!
      </h1>
      <ListOfNames />
      <Link
        to='start'
        className='bg-orange-800 py-2 p-4 w-1/2 text-center my-10 rounded text-lg text-white'
      >
        Empezar
      </Link>
    </div>
  );
};

export default Home;
