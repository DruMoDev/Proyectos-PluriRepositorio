import React from "react";
import SignOut from "../components/SignOut";
import ToothbrushingForm from "../components/ToothbrushingForm";
import ToothbrushingRegister from "../components/ToothbrushingRegister";

function MainPage({ user, db }) {
  return (
    <div className='mt-36 md:mt-20 lg:mt-10 flex flex-col justify-center items-center mx-auto'>
      <h1 className='text-xl font-semibold'>¡Bienvenido {user.displayName}!</h1>
      <ToothbrushingForm db={db} user={user} />
      <ToothbrushingRegister db={db} user={user}/>
      <div className='absolute top-16 right-0'>
        <SignOut />
      </div>
    </div>
  );
}

export default MainPage;
