import { useReducer } from "react";


const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <button className="btn" onClick={() => dispatch({type: 'decrement'})}>-</button>
      Count: {state.count}
      <button className="btn" onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Counter;