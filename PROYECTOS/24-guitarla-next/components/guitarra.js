import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/guitarras.module.css";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, precio, url } = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${nombre}`}
        width={600}
        height={400}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver Productos
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
