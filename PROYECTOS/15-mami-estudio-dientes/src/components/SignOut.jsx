import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const SignOut = () => {
  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <button
      className='border text-lg font-semibold  bg-blue-200 p-3 px-8 m-4 rounded-lg'
      onClick={signOut}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
