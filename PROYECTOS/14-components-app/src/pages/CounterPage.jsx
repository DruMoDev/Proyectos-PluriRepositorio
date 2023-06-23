import { useReducer, useState } from "react";
import Button from "../components/Button";
import { useNumber } from "../hooks/useNumber";
import Panel from "../components/Panel";
import { count } from "mathjs";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAd: action.payload,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREASE_COUNT_VALUE_TO_ADD:
      return {
        ...state,
        count: state.count + state.valueToAd,
        valueToAd: 0,
      };
    default:
      return state;
  }
};

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "set-value-to-add";
const DECREMENT_COUNT = "decrement";
const INCREASE_COUNT_VALUE_TO_ADD = "increase-count-plus-value-to-add";

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAd, setValueToAd] = useState();

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: INCREASE_COUNT_VALUE_TO_ADD,
    });
    // setCount(count + valueToAd)
    // setValueToAd(0)
  };

  return (
    <Panel>
      <div>
        <h1>Count is {state.count}</h1>
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
          value={state.valueToAd || ""}
        />
      </form>
    </Panel>
  );
};

export default CounterPage;
