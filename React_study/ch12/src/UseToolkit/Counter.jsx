import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      console.log(state)
      // state.store 에 지정한 슬라이드 키값
      return state.counter.value
   })
   //
   return (
      <div>
         <button
            onClick={() => {
               // 툴킷 에서는 액션 크리에이터를 생성해준다
               // dispatch(counterSlice.actions.up(2))
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               // 툴킷 에서는 액션 크리에이터를 생성해준다
               // dispatch(counterSlice.actions.down(2))
               dispatch(down(2))
            }}
         >
            -
         </button>
         {/* <button onClick={dispatch}>-</button> */}
         {count}
      </div>
   )
}

export default Counter