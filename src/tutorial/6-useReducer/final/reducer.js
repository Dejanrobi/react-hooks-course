// The reducer function that specifies how the  initial state changes to the next

export const reducer = (state, action) => {

  // runs when the dispatched action is 'ADD_ITEM'
  if (action.type === 'ADD_ITEM') {
    // destructures the initial state of the people array and creates a new Array called newPeople, with the passed data in the payload
    // added to the array
    const newPeople = [...state.people, action.payload];
    //changing the initial state to the new state, 
    //we destructure the initial state which is an object.
    //change the people array to the new array,
    //set isModalOpen to true
    //set the new modalContent
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  // no value entered we pass an action: 'NO_VALUE'
  //We set the new state, isModalOpen to true and the modalContent to: 'please enter a value"
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter a value' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    // finding the person with the passed id in order obtain their name
    const newModalContent = state.people.find(
      (person) => person.id === action.payload
    )

    // using the filter function to return new people that do not match the specified id in the payload
    // if the person id does not match the specified id, add the person  to the newPeople array.
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    
    // changing the initial state to the new state with people changed to newPeople
    return { ...state, people: newPeople, isModalOpen: true, modalContent: `${newModalContent.name} removed` };
  }
  throw new Error('no matching action type');
};
