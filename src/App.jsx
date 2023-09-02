import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage, StartTraining} from './pages';

const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="/start-training" element={<StartTraining />} />
        <Route path="*" element={<h1 style={{textAlign: 'center'}}>404 Page Does Not Exist</h1>}/>
    </Routes>
    </>
  )
}

export default App
