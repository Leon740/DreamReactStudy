import React, { useReducer } from 'react';

const initialState = { count: 0, smthProp: 'smthValue' };

const objActions = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset',
};

function Counter3() {
  function fnReducer(state, action) {
    switch (action.type) {
      case objActions.increment: return { ...state, count: state.count + action.payload };
      case objActions.decrement: return { ...state, count: state.count - action.payload };
      case objActions.reset: return { ...state, count: 0 };
      default: throw new Error('Error');
    }
  }

  const [state, dispatch] = useReducer(fnReducer, initialState);
  console.log(state);

  return (
    <div>
      <div>{state.count}</div>
      <button type="button" onClick={() => dispatch({ type: objActions.increment, payload: 10 })}>+</button>
      <button type="button" onClick={() => dispatch({ type: objActions.decrement, payload: 5 })}>-</button>
      <button type="button" onClick={() => dispatch({ type: objActions.reset })}>reset</button>
    </div>
  );
}

export default Counter3;
