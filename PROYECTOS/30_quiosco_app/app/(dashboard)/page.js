"use client";
import Modal from "react-modal";
import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const info = "MySQL82"

export default function Home() {
  const { categoriaActual, modal } = useQuiosco();

  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elije y personaliza tu pedido a continuación:
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
    </>
  );
}

