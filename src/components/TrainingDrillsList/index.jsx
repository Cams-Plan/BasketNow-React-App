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

    const [drillBlock, setDrillBlock] = useState(1)

    useEffect(() => {
        console.log(drillBlock)
        console.log(elements)
    }, [() => setDrillBlock()])
    
    const elements = arrayRange(1, drillBlock, 1)

  return (
    <>
    <div>Training Drills: {drillBlock}</div>
    <form action="">
    {elements.map((drillNum, index) => <div><TrainingBlockForm/></div>)}
    </form>
    <button className='addButtons' id='addDrillBtn' onClick={() => setDrillBlock(drillBlock + 1)}>+</button>
    </>
    
  )
}

export default TrainingDrillList
