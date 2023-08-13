import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Country from './components/Country';


const App = () => {




  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" element={<Country />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App
