import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';

import { TrainingBlockForm } from '../../components';

const TrainingDrillList = () => {

    const dispatch = useDispatch();
    const { addTrainingDrill, removeTrainingDrill } = bindActionCreators(actionCreators, dispatch)

    const arrayRange = (start, stop, step) => Array.from(
        {length: (stop - start) / step + 1},
        (value, index) => start + index * step
    );

    useEffect(() => {
        console.log(drillBlock)
    }, [() => setDrillBlock()])
    const [drillBlock, setDrillBlock] = useState(1)
    const elements = arrayRange(1, drillBlock, 1)

  return (
    <>
    <div>Training Drills: {drillBlock}</div>
    <form id={`trainingBlockForm`} onSubmit={console.log("submitted")}>
        <input type="datetime-local" name="" style={{margin: "15px 0px 15px 80px"}} id={`trainingBlockDate${drillBlock}`} />
        {elements.map((drillNum, index) => <div key={index}><TrainingBlockForm key={index}/></div>)}
        
    </form>
    <button className='addButtons' id='addDrillBtn' onClick={() => setDrillBlock(drillBlock + 1)}>+</button>
    <button type='submit' form={`trainingBlockForm`} className='formSubmitBtn'><img src="./lock.png" alt="padlock png" className='padlock'/></button>
    </>
    
  )
}

export default TrainingDrillList
