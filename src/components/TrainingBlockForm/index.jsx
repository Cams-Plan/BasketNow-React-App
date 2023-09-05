import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';

const TrainingBlockForm = () => {

  const trainingKPI = useSelector(state => state.trainingType)
  const dispatch = useDispatch();
  const { changeOptionPeripheral } = bindActionCreators(actionCreators, dispatch)
  const options = {
    "offense": {
        "full court": [["full court 4 lay-up drill", "set-reps"], ["end-to-end 3-point shooting", "timed"], ["end-to-end mid-range shooting", "timed"]],
        "half court": ["free-for-all 3-point shooting", "5-spot 3-point shooting", "around the key", "around the key (extended)", "free-for-all mid-range shooting"]
    },
    "defence": {
        "full court": ["slide and recover", "baseline-sideline 8's"],
        "half court": ["5 spot closouts", "box drill"]
    }
  }
// ADD EXTRA VALUES TO EACH OPTION VALUE [drill, timed/set-reps]

  return (
    <>
    <form className='training-block'>
      {trainingKPI === "timed" ? <><label htmlFor="rep-range">Reps: </label>
      <input type="number" name="rep-range" id="" min={0} /></> : <input type="time" name="duration" id="" />}
  
      <select defaultValue={"--Select Training Drill--"} id="training-select" onChange={(e) => changeOptionPeripheral(e.target.selectedOptions[0].className)}>
        <option disabled value="--Select Training Drill--">--Select Training Drill--</option>
        <optgroup label='Offense'/>
          <optgroup label='Full-Court Offence'>
            {Object.values(options.offense['full court']).map((option, i) => <option key={`fco${i}`} className={option[1]}>{option[0]}</option>)}
          </optgroup>

          <optgroup label='Half-Court Offence'>
            {Object.values(options.offense['half court']).map((option, i) => <option key={`hco${i}`}>{option}</option>)}
          </optgroup>

        <optgroup label='Defence'/>
          <optgroup label='Full-Court Defence'>
            {Object.values(options.defence['full court']).map((option, i) => <option key={`fcd${i}`}>{option}</option>)}
          </optgroup>

          <optgroup label='Half-Court Defence'>
            {Object.values(options.defence['half court']).map((option, i) => <option key={`hcd${i}`}>{option}</option>)}
          </optgroup>
      </select>
      <input type="datetime-local" name="" id="" />
    </form>

    </>
  )
}

export default TrainingBlockForm
