import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';

import { TrainingBlockForm } from '../../components';

const TrainingDrillList = () => {

    const dispatch = useDispatch();
    const { addTrainingDrill, removeTrainingDrill } = bindActionCreators(actionCreators, dispatch)



  return (
    <>
    <div>Training drill num</div>
    <form action="">
    <TrainingBlockForm/>
    </form>
    <button className='addButtons' id='addDrillBtn'>+</button>
    </>
    
  )
}

export default TrainingDrillList
