import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <button className='border text-lg font-semibold  bg-blue-200 p-3 px-8 m-4 rounded-lg' onClick={signInWithGoogle}>Sign In with Google</button>
  );
};

export default SignIn;
