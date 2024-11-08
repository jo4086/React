// State를 바꿔주는 역할
// import {}
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
    // 첫 state = {value:0}  << 최상단에 초기값을 객체로 value:0 선언해서
    console.log(action) // {type: 'up', step:2}가 오는걸 확인함
    if (action.type === 'up') {
        return {...state, value: state.value + action.step}
    }
   return state
}
export default counterReducer
