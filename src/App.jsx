import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages';

const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<Homepage />} />
    </Routes>
    </>
  )
}

export default App
