import './App.css'
import React, { useState } from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

function reducer(currentState, action) {
   if (currentState === undefined) {
      return {
         number: 1,
      }
   }

   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++
   }

   return newState
}

const store = createStore(reducer)

function Left1() {
   return (
      <div>
         <h1>Left1</h1>
         <Left2></Left2>
      </div>
   )
}

function Left2() {
   return (
      <div>
         <h1>Left2</h1>
         <Left3></Left3>
      </div>
   )
}

function Left3() {
   // function f(state) {
   //    return state.number
   // }

   // const number = useSelector(f) 화살표 함수로 간단하게 표현 하면 아래와 같다
   const number = useSelector((state) => state.number)

   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   )
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2></Right2>
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3></Right3>
      </div>
   )
}

function Right3() {
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}

function App() {
   return (
      <div className="container">
         <h1>Root</h1>
         <div className="grid">
            <Provider store={store}>
               <Left1></Left1>
               <Right1></Right1>
            </Provider>
         </div>
      </div>
   )
}

export default App
