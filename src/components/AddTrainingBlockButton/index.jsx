// USE THIS FEATURE LATER!
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';

const AddTrainingBlockButton = () => {

  const dispatch = useDispatch();
  const { addTrainingBlock } = bindActionCreators(actionCreators, dispatch);

  // const hdkd = <>{(sections) => sections.map(el) => <}</>

  return (
    <>
    <button className='addButtons' onClick={() => addTrainingBlock()}>+</button>
    </>
  )
}

export default AddTrainingBlockButton;
