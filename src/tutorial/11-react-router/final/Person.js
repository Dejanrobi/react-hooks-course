import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('default name');
  // obtaining the id in react router
  const { id } = useParams();

  useEffect(() => {
    // finding the data of the person equal to the passed id in react router, we convert the id to integer.
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, [id]);
  // useEffect only runs whenever the id changes to avoid any re-render
  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;
