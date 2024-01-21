import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// Use to reference DOM elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    // making the input empty
    refContainer.current.value = ''
  };

  // Runs whenever the DOM loads or re-renders.
  //below, it displays the current  element.
  //it also focuses on the current element

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    // the current element is the input element and that's why we take its value.
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
