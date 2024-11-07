import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice' //counterSlice.reducer
import userSlice from './userSlice' //userSlice.reducer

// reducer를 store에 저장
const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      user: userSlice,
   },
})

export default store // store 내보내기
