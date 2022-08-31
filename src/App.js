import React, { useReducer } from "react";
import "./App.css";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const incrementHandler = () => {
    return dispatch({type:ACTIONS.INCREMENT});
  };
  const decrementHandler = () => {
    return dispatch({type:ACTIONS.DECREMENT});
  };
  return (
    <div className="App">
      <button className="button" onClick={decrementHandler}>-</button>
      <span className="span">{state.count}</span>
      <button className="button" onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App;

//My App
