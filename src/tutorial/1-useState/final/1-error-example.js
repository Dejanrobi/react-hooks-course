import React from 'react';

const ErrorExample = () => {
  // There is an error in this example because the random title does not change.
  // 1. This is because we are not re-rendering the component
  //2. We have no way to preserve the 'hello people' value in between the renders
  // Hence, this is why we would want to use a useState.
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
