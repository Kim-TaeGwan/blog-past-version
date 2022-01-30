import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import axios from 'axios';

function App() {
  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
