
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ToothbrushingRegister = ({ user, db, rerender, rerenderState }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, user.displayName);
        const querySnapshot = await getDocs(collectionRef);

        const userDataUpdated = [];
        querySnapshot.forEach(doc => {
          const datas = doc.data();
          userDataUpdated.push({ id: doc.id, ...datas });
        });

        setUserData(userDataUpdated);
      } catch (error) {
        console.error("Error al obtener los documentos:", error);
      }
    };

    fetchData();
    console.log(userData);
  }, [rerender]);


  const handleDeleteDocument = async (documentId) => {
    try {
      const documentRef = doc(db, user.displayName, documentId); 
      await deleteDoc(documentRef);
      rerenderState()
      console.log("Documento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }
  };

  const renderedUserData = userData.map(doc => {
    const timestamp = new Date(doc.timestamp.seconds * 1000);
    const day = timestamp.getDate();
    const month = timestamp.getMonth() + 1;
    const year = timestamp.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return (
      <div key={doc.id} className='border p-3 mb-5 rounded-md flex flex-col gap-5'>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li>Nombre: <span className="font-bold text-black">{doc.usuario}</span></li>
          <li>
            Te has lavado los dientes? <span className="font-bold text-black">{doc.brushedTeeth}</span>
          </li>
          <li>Hora del desayuno: <span className="font-bold text-black">{doc.breakfastTime}</span></li>
          <li>Hora de la primera comida: <span className="font-bold text-black">{doc.mealTime}</span></li>
          <li>Nivel de hambre: <span className="font-bold text-black">{doc.hungerLevel}</span></li>
          <li>Fecha: <span className="font-bold text-black">{formattedDate}</span></li>
        </ul>
        <button className="hover:bg-red-600 py-1 px-5 border bg-red-500 rounded-sm self-center " onClick={() => handleDeleteDocument(doc.id)}>Eliminar</button>
      </div>
    );
  })

  return (
    <div>
      <h2 className="mb-5 border-b-2 text-center font-semibold">Tu registro hasta el momento:</h2>
      {userData.length === 0 ? <p className="mb-5 text-center text-red-400 text-md font-bold italic">Aun no has hecho tu primer registro</p> : <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{renderedUserData}</div>}
    </div>
  );
};

export default ToothbrushingRegister;
