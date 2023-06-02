import React from "react";
import SignOut from "../components/SignOut";

function MainPage({ user }) {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <h1 className='text-xl m-4 font-semibold'>
        Bienvenido {user.displayName}!
      </h1>
      <div className="absolute top-16 right-0">
      <SignOut />
      </div>
    </div>
  );
}

export default MainPage;
