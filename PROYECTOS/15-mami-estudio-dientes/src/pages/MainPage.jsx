import React from "react";
import SignOut from "../components/SignOut";
import ToothbrushingForm from "../components/ToothbrushingForm";

function MainPage({ user, firestore }) {
  return (
    <div className='h-full flex flex-col justify-center items-center mx-auto'>
      <h1 className='text-xl font-semibold'>
        ¡Bienvenido {user.displayName}!
      </h1>      
      <ToothbrushingForm firestore={firestore} user={user}/>
      <div className="absolute top-16 right-0">
      <SignOut />
      </div>
    </div>
  );
}

export default MainPage;
