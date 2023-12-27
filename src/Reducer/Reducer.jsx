import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: (state.count % 2 == 0)?'Even' :'ODD' };
    case "toggleShowText":
      return { count: state.count, showText: (state.count % 2 == 0)?'Even' :'ODD' };
    default:
      return state;
  }
};



const ReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: 'EVEN' });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>{state.showText}</p>}
    </div>
  );
};

export default ReducerPractice;