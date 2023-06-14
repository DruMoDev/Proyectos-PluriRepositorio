import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const SignOut = () => {
  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <button
      className='border text-lg font-semibold  bg-blue-200 p-2 px-3 rounded-lg'
      onClick={signOut}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
