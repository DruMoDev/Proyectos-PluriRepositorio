import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const ToothbrushingForm = ({ db, user }) => {
  const [brushedTeeth, setBrushedTeeth] = useState("");
  const [breakfastTime, setBreakfastTime] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [hungerLevel, setHungerLevel] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBrushedTeethChange = event => {
    setBrushedTeeth(event.target.value);
  };

  const handleBreakfastTimeChange = event => {
    setBreakfastTime(event.target.value);
  };

  const handleMealTimeChange = event => {
    setMealTime(event.target.value);
  };

  const handleHungerLevelChange = event => {
    setHungerLevel(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {      
      const docRef = await addDoc(collection(db, user.displayName), {
        usuario: user.displayName,
        brushedTeeth,
        breakfastTime,
        mealTime,
        hungerLevel,
        timestamp: new Date(),
      });

      console.log("Documento creado con ID:", docRef.id);

      setFormSubmitted(true);
      setBrushedTeeth("");
      setBreakfastTime("");
      setMealTime("");
      setHungerLevel("");
    } catch (error) {
      console.error("Error al crear el documento:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-10/12 max-w-[700px] my-7 border shadow-sm p-8 py-10 bg-gray-50 rounded-md text-center justify-center items-center gap-10 text-lg'
    >
      {formSubmitted && (
        <div className='text-green-600'>
          ¡El formulario se ha enviado correctamente!
        </div>
      )}

      <label>
        ¿Te has lavado los dientes hoy?
        <div className="flex justify-center gap-10">
          <label>
            Sí
            <input
            className="ml-2"
              type="radio"
              value="Sí"
              checked={brushedTeeth === "Sí"}
              onChange={handleBrushedTeethChange}
            />
          </label>
          <label>
            No
            <input
            className="ml-2"
              type="radio"
              value="No"
              checked={brushedTeeth === "No"}
              onChange={handleBrushedTeethChange}
            />
          </label>
        </div>
      </label>

      <label className='flex flex-col items-center gap-3'>
        <span>Hora del desayuno:</span>
        <input
          className='p-2 border rounded-md'
          type='time'
          value={breakfastTime}
          onChange={handleBreakfastTimeChange}
        />
      </label>

      <label className='flex flex-col items-center gap-3'>
        Hora de la siguiente comida:
        <input
          className='p-2 border rounded-md'
          type='time'
          value={mealTime}
          onChange={handleMealTimeChange}
        />
      </label>

      <label className='flex flex-col items-center gap-3'>
        Nivel de hambre (1-5):
        <input
          className='border focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border-gray-300 rounded-md text-xl m-auto p-1'
          type='number'
          min='1'
          max='5'
          value={hungerLevel}
          onChange={handleHungerLevelChange}
        />
      </label>

      <button
        className='p-2 border rounded-lg mt-7 w-1/2 bg-white hover:bg-green-300 hover:-translate-y-1 transition-all ease-in'
        type='submit'
      >
        Guardar
      </button>
    </form>
  );
};

export default ToothbrushingForm;
