import React, { useReducer } from 'react';

// === Concept
// Keep the initialState, reducerFn, actions outside of the main func comp so they don't change on rerender

const initialState = {
  count: 0,
  name: 'Leo'
};

const actions = {
  decrement: '-',
  reset: '0',
  increment: '+'
};

function reducerFn(state, action) {
  switch (action.type) {
    case actions.decrement:
      return { ...state, count: state.count - action.payload };
    case actions.reset:
      return { ...state, count: 0 };
    case actions.increment:
      return { ...state, count: state.count + action.payload };
    default:
      return { ...state, count: initialState.count };
  }
}

function Counter4() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleBtnOnClick = ({ type, payload }) => {
    dispatch({ type, payload });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        type="button"
        onClick={() => handleBtnOnClick({ type: actions.decrement, payload: 5 })}
      >
        -
      </button>
      <button type="button" onClick={() => handleBtnOnClick({ type: actions.reset, payload: 0 })}>
        0
      </button>
      <button
        type="button"
        onClick={() => handleBtnOnClick({ type: actions.increment, payload: 10 })}
      >
        +
      </button>
    </div>
  );
}

export default Counter4;
