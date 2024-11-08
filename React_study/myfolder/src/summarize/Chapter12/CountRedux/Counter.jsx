// dispatch : 창고 지원역할 ... reducer 호출
// useSelector : props없이 state값을 바로 가져옴

import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      console.log(state)
      return state.value
   })

   return (
      <>
         <button
            onClick={() => {
               dispatch({ type: 'up', step: 2 })
            }}
         >
            +
         </button>
         {count}
      </>
   )
}

export default Counter
