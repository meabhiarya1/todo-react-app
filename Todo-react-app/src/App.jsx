import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
