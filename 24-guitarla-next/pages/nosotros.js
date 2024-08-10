import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <>
      <Layout title={"Nosotros"} description={"GuitarLa, sobre nosotros"}>
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <div>
              <Image
                alt="imagen sobre nosotros"
                src={"/img/nosotros.jpg"}
                width={1000}
                height={800}
              />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Nosotros;
