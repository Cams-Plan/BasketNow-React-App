import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';

import { TrainingBlockForm } from '../../components';

const TrainingDrillList = () => {

    const dispatch = useDispatch();
    const { addTrainingDrill, removeTrainingDrill } = bindActionCreators(actionCreators, dispatch)

    const [drillBlock, setDrillBlock] = useState(1)

    useEffect(() => {
        console.log(drillBlock)
    }, [() => setDrillBlock()])

  return (
    <>
    <div>Training drill num</div>
    <form action="">
    <TrainingBlockForm/>
    </form>
    <button className='addButtons' id='addDrillBtn' onClick={() => setDrillBlock(drillBlock + 1)}>+</button>
    </>
    
  )
}

export default TrainingDrillList
