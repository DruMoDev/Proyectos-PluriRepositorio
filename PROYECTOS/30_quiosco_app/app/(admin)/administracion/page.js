"use client"
import Orden from "@/app/components/Orden";
import axios from "axios";
import useSWR from "swr";


const Home = () => {

  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);

  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {refreshInterval: 100});

  return (
    <>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
      {data && data.length ? data.map(orden => <Orden key={orden.id} orden={orden}/>) : <p>No hay ordenes pendientes...</p>}
    </>
  );
};

export default Home;
