import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../action-creators';
import {bindActionCreators} from 'redux';


const TrainingBlockForm = () => {

  // const trainingKPI = useSelector(state => state.trainingType)
  const dispatch = useDispatch();
  const { changeOptionPeripheral, addTrainingDrill, removeTrainingDrill } = bindActionCreators(actionCreators, dispatch)

  const [trainingKPI, setTrainingKPI] = useState()

  const trainingDrillElems = useSelector(state => state.trainingDrills)

  const options = {
    "offense": {
        "full court": [["full court 4 lay-up drill", "set-reps"], ["end-to-end 3-point shooting", "timed"], ["end-to-end mid-range shooting", "timed"]],
        "half court": [["free-for-all 3-point shooting", "timed"], ["5-spot 3-point shooting", "timed"], ["around the key", "set-reps"], ["around the key (extended)","set-reps"], ["free-for-all mid-range shooting", "timed"]]
    },
    "defence": {
        "full court": [["slide and recover", "timed"], ["baseline-sideline 8's", "timed"]],
        "half court": [["5 spot closeouts", "timed"], ["box drill", "set-reps"]]
    }
  }
// ADD EXTRA VALUES TO EACH OPTION VALUE [drill, timed/set-reps]

  return (
    <>
      {trainingKPI === "timed" ? <><label htmlFor="rep-range"><img src="./repeat-black.png" alt="reps" className='training-icon'/></label>
      <input type="number" name="rep-range" id="" min={0} max={1000}/></> : <> <label htmlFor="minutes"><img src="./chronometer.png" alt="timer" className='training-icon'/></label><input type="number" name="minutes" id="" min={0} max={60} step={.5}/></>}

      <select defaultValue={"--Select Training Drill--"} onChange={(e) => setTrainingKPI(e.target.selectedOptions[0].className)}>
        <option disabled value="--Select Training Drill--">--Select Training Drill--</option>
        <optgroup label='Offense'/>
          <optgroup label='Full-Court Offence'>
            {Object.values(options.offense['full court']).map((option, i) => <option key={`fco${i}`} className={option[1]}>{option[0]}</option>)}
          </optgroup>

          <optgroup label='Half-Court Offence'>
            {Object.values(options.offense['half court']).map((option, i) => <option key={`hco${i}`} className={option[1]}>{option[0]}</option>)}
          </optgroup>

        <optgroup label='Defence'/>
          <optgroup label='Full-Court Defence'>
            {Object.values(options.defence['full court']).map((option, i) => <option key={`fcd${i}`} className={option[1]}>{option[0]}</option>)}
          </optgroup>

          <optgroup label='Half-Court Defence'>
            {Object.values(options.defence['half court']).map((option, i) => <option key={`hcd${i}`} className={option[1]}>{option[0]}</option>)}
          </optgroup>
      </select>
      {/* <input type="datetime-local" name="" id="" /> RE-LATER*/}
    </>
  )
}

export default TrainingBlockForm
