import React, { useEffect } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';

const AddTrainingBlockButton = () => {

  const trainingBlockElems = useSelector(state => state.trainingBlock)
  const dispatch = useDispatch();
  const { addTrainingBlock } = bindActionCreators(actionCreators, dispatch);

  const sections = () => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
  }

  return (
    <>
    <h1>{trainingBlockElems}</h1>
    <button className='addButtons' onClick={() => addTrainingBlock()}>+</button>
    </>
  )
}

export default AddTrainingBlockButton;
