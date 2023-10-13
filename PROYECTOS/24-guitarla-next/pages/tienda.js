import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/guitarra";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css"

const Tienda = ({ guitarras }) => {
  console.log(guitarras);

  return (
    <>
      <Layout
        title={"Tienda"}
        description={"GuitarLa, tienda virtual de guitarras"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Tienda;

// export async function getStaticProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   );
//   const { data: guitarras } = await respuesta.json();

//   console.log(guitarras);

//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  console.log(guitarras);

  return {
    props: {
      guitarras,
    },
  };
}
