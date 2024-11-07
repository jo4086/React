// 예제 reducer 함수
function reducer(state, action) {
   switch (action.type) {
      case 'add':
         return [...state, action.payload]
      case 'delete':
         return state.filter((item) => item !== action.payload)
      default:
         return state
   }
}

// customUseReducer라는 함수로 useReducer를 흉내 내봅니다
function customUseReducer(reducer, initialState) {
   let state = initialState // 초기 상태

   // 상태를 변경하는 dispatch 함수를 만듭니다
   function dispatch(action) {
      // reducer를 통해 새로운 state를 만듭니다
      state = reducer(state, action)
      console.log('Updated State:', state) // 상태 변화 확인
   }

   // [현재 상태, dispatch 함수] 형태로 반환
   return [state, dispatch]
}

// 사용 예시
const [todos, dispatch] = customUseReducer(reducer, [])

// 초기 상태는 빈 배열 `[]`
console.log('Initial State:', todos) // 빈 배열

// 상태 업데이트 예시
dispatch({ type: 'add', payload: 'Learn React' }) // 'Learn React' 추가
dispatch({ type: 'add', payload: 'Learn Redux' }) // 'Learn Redux' 추가
dispatch({ type: 'delete', payload: 'Learn React' }) // 'Learn React' 삭제
