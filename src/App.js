import React from 'react';
import {Outlet} from 'react-router-dom';
import {Navbar} from './components';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
