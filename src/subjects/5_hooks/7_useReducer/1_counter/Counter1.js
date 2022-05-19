import React, { useReducer } from "react";

const Counter1 = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter : {state.count}</h3>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          + 1
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          - 1
        </button>
      </div>
    </div>
  );
};

export default Counter1;
