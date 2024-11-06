import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

function reducer(currentState, action) {
   if (currentState === undefined) {
      return { number: 1 }
   }
   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++
   }

   return newState // 새롭게 update 된 state값을 적용
}

// store: reducer, state를 저장하는 창고역할
const store = createStore(reducer)
// provider store={store}로 store를 시작

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
   // console.log(state)
   // return state.number
   //  }

   // const number = useSelector(f)
   // state = {number:1}
   // useSelector에서 reducer를 실행시켜 값을 가져옴
   const number = useSelector((state) => state.number)

   return (
      <div>
         <h1>Left3: {number}</h1>
      </div>
   )
}

/* function Left3() {
   function f(state) {
      console.log(state)
      return state.number
   }

   const number = useSelector(f)
   //   state = {number:1}
   // useSelector에서 reducer를 실행시켜 값을 가져옴
   //  const number = useSelector((state) => state.number)

   //  return (
   //     <div>
   //        <h1>Left3: {number}</h1>
   //     </div>
   //  )
} */

// useSelector를 사용하면 state를 사용하지 않고 바로 가져 올 수 있음
// const number = useSelectior ((state) => {return state.number})

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2 />
      </div>
   )
}

function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3 />
      </div>
   )
}

function Right3() {
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         {/* <input type="button" value="+" /> */}
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' }) // type:PLUS = 액션역할
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
            {/* ▼ Provider: stroe에 저장된 reducer, state를 제공하는 역할
                  ▶ 사용법 : 제공하고 싶은 컴포넌트를 감싸기
                  ▶ Left1, Right1 컴포넌트에서 store에 저장된 [reducer, state] 사용 */}
            <Provider store={store}>
               <Left1 />
               <Right1 />
            </Provider>
         </div>
      </div>
   )
}

export default App
