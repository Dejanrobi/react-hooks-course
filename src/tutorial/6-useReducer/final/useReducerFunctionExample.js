import React, {useReducer} from 'react';
// useReducer hook is an alternative to the useState.
// Its used to manage more complex logic in your components.
// useful when the state has multiple sub-values or when the next state depends on the previous one.

// How it works
// 1. State: takes in a reducer function and an initial state. the reducer function specifies how the state transitions from one state to the next
//based on the dispatched action.
//2. Dispatching actions: instead of directly setting the state like 'useState', you dispatch actions which are processed by the reducer function.
//An action: is an object that contains a type (identifying the action) and an optional payload(data associated with the action).
//3. Reducer function: This function specifies how the state should change in response the actions.
//It receives the current state and the action dispatched, then computes the new state based on the action type and payload.

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return { count:state.count + 1};
        case 'DECREMENT':
            return { count:state.count - 1 };
        default:
            return state;
    }

}

// component using the useReducer
const UseReducerFunctionExample = () => {
    // Reducer function
    const[state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>     
    </div>
  )
}

export default UseReducerFunctionExample
