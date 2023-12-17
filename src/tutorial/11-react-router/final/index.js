import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';


// FIX THE SWITCH ERROR FROM THE FOLLOWING LINK
// https://kinsta.com/knowledgebase/attempted-import-error-switch-is-not-exported-from-react-router-dom/#:~:text=This%20error%20can%20be%20fixed,version%20to%205%20or%20below

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path='/person/:id' element={<Person />}/>
        <Route path="*" element={<Error />} />
          
        
        {/* <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path='*'>
          <Error />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
