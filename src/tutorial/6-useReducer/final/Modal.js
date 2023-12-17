import React, { useEffect } from 'react';

// The modal Component created where the modalContent prop and the closeModal prop is passed. 
const Modal = ({ modalContent, closeModal }) => {
  // setting the useEffect hook to run the setTimeout function immediately the modal is opened.
  // When the modal is opened, the timeout counts down from 3s to 0s and runs the closeModal function which dispatches the 'CLOSE_MODAL'
  // hence setting the isModalOpen to false
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    // displays the modal with the modalContent
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
