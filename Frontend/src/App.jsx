import React from 'react';
import {Routes, Route} from './Routes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={home}  />
    </Routes>
  )
}

export default App