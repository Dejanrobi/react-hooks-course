import React from 'react';
// 1: useState
// ensure you: import React, {useState} from 'react' inside that component;
// 1.1
// import ErrorExample from './tutorial/1-useState/final/1-error-example';
// 1.2
// import UseStateBasics from './tutorial/1-useState/final/2-useState-basics';
// 1.3
// import UseStateArray from './tutorial/1-useState/final/3-useState-array';
// 1.4
// import UseStateObject from './tutorial/1-useState/final/4-useState-object';
// 1.5
// import UseStateCounter from './tutorial/1-useState/final/5-useState-counter';

// useEffect
//Ensure you have: import React, {useEffect} from 'react';
// 2.1
// import UseEffectBasics from './tutorial/2-useEffect/final/1-useEffect-basics';
// 2.2
// import UseEffectCleanup from './tutorial/2-useEffect/final/2-useEffect-cleanup';
// 2.3
// import UseEffectFetchData from './tutorial/2-useEffect/final/3-useEffect-fetch-data';

// 3: Conditional Rendering
// 3.1
// import MultipleReturns from './tutorial/3-conditional-rendering/final/1-multiple-returns';
// 3.2
// import ShortCircuit from './tutorial/3-conditional-rendering/final/2-short-circuit';
// 3.3
// import ShowHide from './tutorial/3-conditional-rendering/final/3-show-hide';

// 4 Forms
// 4.1
// import ControlledInputs from './tutorial/4-forms/final/1-controlled-inputs';
// 4.2
// import MultipleInputs from './tutorial/4-forms/final/2-multiple-inputs';

// 5. USE REF
// import UseRefBasics from './tutorial/5-useRef/final/1-useRef-basics';



//6. USE REDUCER

// Use Reducer Explanation.
// first simple
// import UseReducerFunctionExample from './tutorial/6-useReducer/final/useReducerFunctionExample';
// second complex
import Index from './tutorial/6-useReducer/final/index';

// 6.1
// import Index from './tutorial/6-useReducer/final';


//7 PROP DRILLING
// 7.1
// import PropDrilling from './tutorial/7-prop-drilling/final/1-prop-drilling';

// 8 USE CONTEXT
// 8.1
// import ContextAPI from './tutorial/8-useContext/final/1-context-api';

// 9. CUSTOM HOOKS
// 9.1 Fetch Example
// import Example from './tutorial/9-custom-hooks/final/1-fetch-example';

// 10: PROP TYPES
// 10.1
// import Index from './tutorial/10-prop-types/final';


// 11. REACT ROUTER
// import ReactRouterSetup from './tutorial/11-react-router/final';

// 12. useMemo
// import Index from './tutorial/12-memo-useMemo-useCallback/final';



const App = () => {
  return (
    <div className='container'>
      {/* USESTATE */}
      {/* <ErrorExample /> */}
      {/* <UseStateBasics/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateCounter/> */}

      {/* USEEFFECT */}
      {/* <UseEffectBasics/> */}
      {/* <UseEffectCleanup/> */}
      {/* <UseEffectFetchData/> */}

      {/* CONDITIONAL RENDERING */}
      {/* <MultipleReturns/> */}
      {/* <ShortCircuit/> */}
      {/* <ShowHide/> */}

      {/* FORMS */}
      {/* <ControlledInputs/> */}
      {/* <MultipleInputs/> */}

      {/* USE REF */}
      {/* <UseRefBasics/> */}

      {/* USE REDUCER */}

      {/* Use reducer explanation */}
      {/* <UseReducerFunctionExample/> */}
      <Index/>

      {/* <Index/> */}
      
      {/* PROP DRILLING */}
      {/* <PropDrilling/> */}

      {/* USE CONTEXT */}
      {/* <ContextAPI/> */}

      {/* CUSTOM HOOKS */}
      {/* <Example/> */}

      {/* PROP TYPES */}
      {/* <Index/> */}

      {/* REACT ROUTER */}
      {/* <ReactRouterSetup/> */}

      {/* USE MEMO */}
      {/* <Index/> */}

    </div>
  )
}

export default App
