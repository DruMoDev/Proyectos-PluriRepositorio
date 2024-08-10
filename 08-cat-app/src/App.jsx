import "./App.css";
import { useGetCatImage } from "./hooks/useGetCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { facts, refreshFact } = useCatFact();
  const { imagen } = useGetCatImage({ facts });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <section className="facts_container">
      <h1>Hola guapos</h1>

      {facts && <p>{facts}</p>}
      <div className="facts_img">
        {imagen && (
          <img
            src={imagen}
            alt={`Imagen usada de las 3 primeras palabras de ${facts}`}
            height={"400px"}
          ></img>
        )}
      </div>
      <button onClick={handleClick}>Hola</button>
    </section>
  );
}

export default App;
