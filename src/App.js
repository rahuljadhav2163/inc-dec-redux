import React from 'react'
import "./App.css"
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { incNumber } from './action';
import { decNumber } from './action';
function App() {
  const mystate = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className='heading'>Inc/Dec Counter</h1>
      <p className='text-line'>Using React Redux</p>
      <div className='num-container'>
        <p className='num' onClick={()=>dispatch(incNumber())}>+</p>
        <p className='num'>{mystate}</p>
        <p className='num' onClick={()=>dispatch(decNumber())}>-</p>
      </div>
    </div>
  )
}
export default App;
