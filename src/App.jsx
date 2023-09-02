import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage, StartTraining} from './pages';

const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="/start-training" element={<StartTraining />} />
    </Routes>
    </>
  )
}

export default App
