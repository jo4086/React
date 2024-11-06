import React, { useReducer, useState } from 'react'

function ReducerCounter2() {
   // / {state 값, dispath} = {reducer, state 초기값}
   const [count, countDispath] = useReducer(countReducer, 0)

   const [number, setNumber] = useState(1)

   // reducer 함수 직접 state를 변경 (회계 직원 역할) (매개변수 2개)
   //  !!! 화살효 함수 불가능
   function countReducer(oldCount, action) {
      console.log(action)

      // 현재 state, dispath에서 전달받은 action
      // state 매개변수로 2개를 받는다
      if (action === 'UP') {
         return oldCount + 1
      } else if (action === 'DOWN') {
         return oldCount - 1
      } else if (action === 'RESET') {
         return 0
      }
   }

   // dispath에서 매개변수가 2개 이상의 값을 전달하고 싶을 땐 json객체 형태로 전달
   // action은 type key값으로 전달
   const down = () => countDispath({ type: 'DOWN', number: number })
   const reset = () => countDispath({ type: 'RESET', number: number })
   const up = () => countDispath({ type: 'UP', number: number })

   const changeNumber = (e) => setNumber(Number(e.target.value))

   //  dispath함수 : 이벤트가 발생시 reducer 함수를 실행시키면서 action을 전달 (창구역할)
   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <input type="text" value={number} onChange={changeNumber} />
         <span>{count}</span>
      </>
   )
}
export default ReducerCounter2
