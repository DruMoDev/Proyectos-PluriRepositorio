import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Importa firestore desde firebase/compat
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";

const firebaseConfig = {
  apiKey: "AIzaSyABIBkupqUd2C-jr3eEzoTAuuZtIoNWnQU",
  authDomain: "nuria-casals-estudio-dientes.firebaseapp.com",
  projectId: "nuria-casals-estudio-dientes",
  storageBucket: "nuria-casals-estudio-dientes.appspot.com",
  messagingSenderId: "930987286988",
  appId: "1:930987286988:web:2e2de06bc6e3a9befe7d69",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore(); // Accede a la instancia de Firestore

const collectionUsersRef = firestore.collection('usuarios');

collectionUsersRef.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Acceder a los datos de cada documento
      const data = doc.data();
      // Hacer algo con los datos
      console.log(data);
    });
  })
  .catch((error) => {
    console.log("Error al obtener los documentos: ", error);
  });

function App() {
  const [user] = useAuthState(firebase.auth()); // Pasa firebase.auth() como argumento

  return (
    <div className='w-screen'>
      <NavBar />
      <section className='h-screen mt-36 md:mt-20 lg:mt-10'>
        {user ? (
          <MainPage user={user} firestore={firestore}/>
        ) : (
          <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='md:text-2xl text-lg m-4 font-semibold'>
              ¡Bienvenido al estudio de Nuria Casals!
            </h1>
            <p>Inicia sesión para registrar tu progreso!</p>
            <SignIn />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;