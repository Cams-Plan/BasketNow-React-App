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
    <div>
      <h2>Training Blocks: {trainingBlockElems > 0 ? trainingBlockElems+1: 1}</h2>
    </div>
    
    {elements.map((blockNum, index) => <TrainingDrillList key={index}/>)}
    <AddTrainingBlockButton/>
    </>
  )
}

export default StartTraining;
