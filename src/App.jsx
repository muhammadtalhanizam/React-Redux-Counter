import React from 'react'
import "./App.css"

import {incNum ,decNum} from "./Actions/index";


import { useSelector, useDispatch } from "react-redux";

const App = () => {

  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();


  return (
    <div className="container">

      <h1>Counter App With React Redux</h1>

      <div className="wrapper">
        <div className="quantity">
          <a className="quantity_minus"  title="Decrement" onClick={() => dispatch(decNum())}><span> - </span></a>
          <input type="text" className="quantity_input" value={changeTheNumber}/>
          <a className="quantity_plus"  title="Increment" onClick={() => dispatch(incNum())}><span> + </span></a>
        </div>
      </div>

    </div>
  )
}

export default App