import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function


import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};


const Index = () => {
  const [name, setName] = useState('');

  // the use reducer contains the state which takes in a reducer function and the initial state.
  //dispatch: instead of directly setting the state, we pass actions to the reducer function which determines how the initial state changes to the 
  //next based on the dispatched action.
  // An action is an object that contains a type(specifies the action passed) and an optional payload(data associated with the action)
  const [state, dispatch] = useReducer(reducer, defaultState);

  // function to handle the submission of the form.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }; 
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      // setting the input back to empty
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };


  return (
    <>
      {state.isModalOpen && (
        // setting a Modal component passing the props (closeModal function and the current Modal Content)
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          // each child must have a unique key
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
