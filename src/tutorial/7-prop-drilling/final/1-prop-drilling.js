import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>prop drilling</h3>
      {/* returning a list component passing the people prop and removePerson function as a prop */}
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

// A list component with the people and removePerson function passed as props.
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            // an object can't be passed as a prop so it must be destructured
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

//A SinglePerson Object with the destructured id, name and passed remoVePerson function
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      {/* calling the removePerson function and passing an id */}
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;
