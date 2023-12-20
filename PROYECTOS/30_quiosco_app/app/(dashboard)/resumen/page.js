"use client";
import ModalProducto from "../../components/ModalProducto";
import ResumenProducto from "../../components/ResumenProducto";
import useQuiosco from "../../hooks/useQuiosco";
import Modal from "react-modal";

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

const Home = () => {
  const { pedido, modal } = useQuiosco();

  return (
    <>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>
      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos en tu pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
    </>
  );
};

export default Home;
