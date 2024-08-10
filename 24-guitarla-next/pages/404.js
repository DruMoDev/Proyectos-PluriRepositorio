import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const Pagina404 = () => {
  return (
    <Layout title="Página no encontrada">
      <p className="error">Página no encontrada</p>
      <Link href={"/"} className="error-enlace">
        Ir a Inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;
