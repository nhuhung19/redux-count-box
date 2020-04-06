import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let initialState = {
    countNum: 0,
    colorBoxs: [],
    backGround: '',
    textColor: ''
}
function countReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT': {
            // state.colorBoxs.push(action.payload); // modify array directly, return array length
            if (action.payload.mutiple) {
                
                for (let i = 1; i <= action.payload.mutiple; i++) {
                    state.colorBoxs.push({id:i+state.countNum, name:action.payload.box.name})
                }
                state.countNum = action.payload.mutiple * 1 + state.countNum
            } else {
                state.countNum++
                state.colorBoxs.push(action.payload.box)
            }
            let nextState = {
                ...state,
                countNum: state.countNum,
                colorBoxs: state.colorBoxs
            }
            console.log(nextState.countNum)
            if (nextState.countNum >= 5) {
                nextState.textColor = '#41EAD4'
            }
            return nextState
        }
        case 'DECREMENT': {
            if (state.countNum <= 0) {
                return state
            }
            if (action.payload.mutiple) {
                state.countNum = state.countNum - action.payload.mutiple * 1
                if (state.countNum < 0) {
                    state.countNum = 0
                }
                for (let i = 0; i < action.payload.mutiple; i++) {
                    state.colorBoxs.pop()
                }
            } else {
                state.countNum--
                state.colorBoxs.pop()
            }
            let nextState = {
                ...state,
                countNum: state.countNum,
                colorBoxs: state.colorBoxs
            }
            if (nextState.countNum < 5) {
                nextState.textColor = ''
            }
            return nextState
        }

        case 'RESET': {
            let nextState = {
                ...state,
                countNum: 0,
                colorBoxs: [],
                backGround: '',
                textColor: ''
            }
            return nextState
        }

        case 'CHANGE_BG': {
            let nextState = {
                ...state,
                backGround: action.payload
            }
            return nextState
        }

        case 'BG_INDIVISUAL': {
            state.colorBoxs.find(box => box.id === action.payload.boxId).backGround = action.payload.bgColor
            console.log(state.colorBoxs)
            // let a = state.colorBoxs.slice() // 
            let nextState = {
                ...state,
                colorBoxs: [...state.colorBoxs] // array moi ne
                // luc nay no se chek thay colorBoxs moi71i no khac hoan toan colorBoxs cu~ nen se render, mac du khac nhau co 1 chu cai
                // neu them 1 array moi minh se khai bao o tren r gan' vafo colorBox
            }
            return nextState
        }
        


        // else if (action.type === 'RESET'){
        //     state.countNum = 0
        //     state.colorBoxs = []
        // }
        default:
            return state
    }
}

const store = createStore(countReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
