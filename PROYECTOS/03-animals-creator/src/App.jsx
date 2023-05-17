import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

const resetAnimals = () => {
  setAnimals([])
}

  const renderdAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}></AnimalShow>;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <button onClick={resetAnimals}>Reset Animals</button>

      <div className="animal-list">{renderdAnimals}</div>
    </div>
  );
}

export default App;
