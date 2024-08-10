import { useEffect, useState } from "react";

function App() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({x: clientX, y : clientY})
    };

    const restarPosition = () => {
      setPosition({ x: -20, y: -20 })
    }

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }
    if (!enable) {
      restarPosition();
    }

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -15,
          top: -10,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} seguir el puntero
      </button>
    </>
  );
}
export default App;
