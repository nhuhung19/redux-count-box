import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from './components/Box'
import { useSelector, useDispatch } from 'react-redux';

function App() {
    let [mutiBox, setMutiBox] = useState('')
    let countNum = useSelector(state => state.countNum)
    const dispatch = useDispatch()
    const incrementNumber = () => {
        dispatch({ type: 'INCREMENT', payload: { box: { id: countNum, name: 'Colorful Box' }, mutiple: mutiBox } })
    }
    const decrementNumber = () => {
        dispatch({ type: 'DECREMENT', payload: { mutiple: mutiBox } })
    }
    const reset = () => {
        dispatch({ type: 'RESET' })
    }
    const changeBackGround = (e) => {
        let background = e.target.value
        console.log(background)
        dispatch({ type: 'CHANGE_BG', payload: background })
    }

    return (
        <div className="text-center">
            <h2>{countNum}</h2>
            <button type="button" className="btn btn-outline-success mx-2" onClick={() => incrementNumber()}>Increment</button>
            <button type="button" className="btn btn-outline-warning mx-2" onClick={() => decrementNumber()}>Decrement</button>
            <button type="button" class="btn btn-outline-info mx-2" onClick={() => reset()}>Reset</button>
            <div className="mt-4">
                <input className="mx-2" onChange={(e) => changeBackGround(e)} type="text" placeholder="change back-ground" />
                <input className="mx-2" onChange={(e) => setMutiBox(e.target.value)} type="number" placeholder="mutiple box by number" />
            </div>
            <div className="mx-auto w-100">
                <Box />
            </div>
        </div>
    );
}

export default App;
