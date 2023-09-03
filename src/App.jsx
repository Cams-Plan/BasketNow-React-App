import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage, StartTraining, NotFoundPage} from './pages';

const App = () => {
  return (
    <>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="/start-training" element={<StartTraining />} />
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App
