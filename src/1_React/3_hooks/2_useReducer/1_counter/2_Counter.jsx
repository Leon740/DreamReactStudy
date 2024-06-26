import React, { useReducer } from 'react';

function init(initialCount) {
  return { count: initialCount };
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    // case "reset":
    //   return { count: action.payload };
    case 'reset':
      return init(action.payload);
    default:
      return state;
  }
};

function Counter2({ initialCount = 0 }) {
  // func init is called with initialCount arg = init(initialCount)
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <div>
      <h3>Counter :{state.count}</h3>

      <div>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          + 1
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          - 1
        </button>
      </div>

      <div className="mt-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: 'reset', payload: initialCount });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter2;
