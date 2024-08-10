import { useState } from "react";
import ToothbrushingForm from "../components/ToothbrushingForm";
import ToothbrushingRegister from "../components/ToothbrushingRegister";

function MainPage({ user, db }) {
const [rerender, setRerender] = useState(false);

const rerenderState = () => {
  setRerender(!rerender)
}

  return (
    <div className='mt-36 flex flex-col justify-center items-center mx-auto'>
      <h1 className='text-xl font-semibold'>¡Bienvenido {user.displayName}!</h1>      
      <ToothbrushingForm db={db} user={user} rerenderState={rerenderState}/>
      <ToothbrushingRegister db={db} user={user} rerender={rerender}  rerenderState={rerenderState}/>      
    </div>
  );
}

export default MainPage;
