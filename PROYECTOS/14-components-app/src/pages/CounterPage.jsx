import { useState } from "react";
import Button from "../components/Button";
import { useNumber } from "../hooks/useNumber";
import Panel from "../components/Panel";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAd, setValueToAd] = useState();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = event => {
   const value = parseInt(event.target.value) || 0
   setValueToAd(value)
   };

   const handleSubmit = (event) => {
    event.preventDefault()
    setCount(count + valueToAd)
    setValueToAd(0)
   }

  return (
    <Panel>
      <div>
        <h1>Count is {count}</h1>
        <div className='flex flex-row'>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <label>Add a lot!</label>
        <input
          type='number'
          onChange={handleChange}
          className='p-1 m-3 bg-gray-50 border border-gray-300'
          value={valueToAd}
        />
      </form>
    </Panel>
  );
};

export default CounterPage;
