"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const { createContext, useState, useEffect } = require("react");

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState();
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [paso, setPaso] = useState(1);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const obtenerCategorias = async () => {
      const respuesta = await fetch("/api/categorias");
      const resultado = await respuesta.json();
      setCategorias(resultado);
    };
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((ped) => ped.id === producto.id)) {
      const pedidoActualizado = pedido.map((ped) =>
        ped.id === producto.id ? producto : ped
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido");
    }
    setModal(false);
  };

  const handleChangePaso = (paso) => {
    setPaso(paso);
  };

  const handleEditarCantidades = (id) => {
    const productoActualizado = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizado[0]);
    setModal(!modal);
    console.log(id);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/ordenes", {
        pedido,
        nombre,
        total,
        fecha: Date.now().toString(),
      });

      // Resetear la app
      setCategoriaActual(categorias[0]);
      setPedido([]);
      setNombre("");
      setTotal(0);

      toast.success("Pedido Realizado Correctamente");
      setTimeout(() => {
        router.push("/");
      }, 3000);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleSetProducto,
        modal,
        handleChangeModal,
        producto,
        handleAgregarPedido,
        pedido,
        paso,
        handleChangePaso,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
