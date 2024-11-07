import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice',
   initialState: { value: 0 },
   reducers: {
      // reducer
      up: (state, action) => {
         console.log(action)
         state.value += action.payload //2
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice
export const { up, down } = counterSlice.actions

// 만약 createSlice가 내부적으로 ({})객체의 키를 자동으로 reducer라고 명명한다면?
// counterSlice = {reducer{name, initialState, reducers: {up,down}}} 형태일것이며
// store에서 counterSlice.reducer라고하는건 곧
/*
counter = {
   name: 'counterSlice',
   initialState: {value:0},
   reducers: {
      up: (state,action) => {state.value +=action.payload},
      down: (state,action)=> {state.value -=action.payload},
   }
} 형태로 추측 여기선counterSlice라고 보냇으니 

counterSlice = {
   reducer: {
      name: 'counterSlice',
      initialState: {value:0},
      reducers: {
         up: (state,action) => {state.value +=action.payload},
         down: (state,action)=> {state.value -=action.payload},
      }
   }
} 가 될 것
 */
