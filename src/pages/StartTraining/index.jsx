import React from 'react'
import { AddTrainingBlockButton, TrainingDrillList } from '../../components';
import { useSelector } from "react-redux";
const StartTraining = () => {

  const trainingBlockElems = useSelector(state => state.numTrainingBlocks)

  const arrayRange = (start, stop, step) => Array.from(
    {length: (stop - start) / step + 1},
    (value, index) => start + index * step
  );
  
  
  const elements = arrayRange(0, trainingBlockElems, 1)
  

  return (
    <>
    <h1>StartTraining</h1>
    <h2>Training Blocks: {trainingBlockElems > 0 ? trainingBlockElems+1: 1}</h2>
      <div className='key-col'>
        <h3>Key:</h3>
        <div className='key-rows'>
          <img src="./chronometer.png" alt="" className='kpi-keys' />
          <p>{"= Timer (minutes)"}</p>
        </div>
        <div className='key-rows'>
          <img src="./repeat-black.png" alt="" className='kpi-keys' />
          <p>{"= Total Reps"}</p>
        </div>
      </div>
    
    {<TrainingDrillList/>}
    {/* <AddTrainingBlockButton/> RE-ADD THIS LATER*/}
    </>
  )
}

export default StartTraining;
