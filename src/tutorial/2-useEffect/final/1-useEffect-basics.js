import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //useEffect runs after every  re-render
  
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      // this is the head title of the page. Look at the top after clicking: New Message(1)
      document.title = `New Messages(${value})`;
    }
  });

  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
