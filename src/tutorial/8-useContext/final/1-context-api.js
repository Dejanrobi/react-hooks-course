import React, { useState, useContext, createContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

// The Context API is used to make the props that are to be passed available int he entire web application.
// i.e variables or functions available to the entire page.


// Creating the context (i.e PersonContext)
const PersonContext = createContext();
// two components - Provider, Consumer


const ContextAPI = () => {
  // setting the people 
  const [people, setPeople] = useState(data);

  // removePerson function
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };


  return (
    // Enclosing the entire components with the PersonContext and setting the values of the PersonContext
    // That are to be accessed  through the entire components
    // the value is set as an object
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // getting the values using the useContext and Passing the PersonContext (to access the values passed in the PersonContext).
  const mainData = useContext(PersonContext);
  // the mainData is an object containing removePerson and the people.
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  // getting the removePerson function from the PersonContext 
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
