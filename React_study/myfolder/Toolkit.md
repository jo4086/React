# Reduce Toolkit

원래라면 스토어는 1개만 작성하지만

툴킷을 이용해 카운터슬라이스로 여러개 작성후 스토어에서 합침

슬라이스를 여러개를 가져다 붙일 수 있음.

${\textsf{\color{green}Green}}$

<details>
<summary>
<span style="font-size:16px;font-weight:600;font-style:italic;color: white;padding-left:5px;background-color: rgb(250, 104, 209);margin:0;line-height:30px;height:30px;width:100%;display:flex;">store.js</span>
</summary>

```swift
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice' //counterSlice.reducer
import userSlice from './userSlice/userSlice' //userSlice.reducer

// reducer를 store에 저장
const store = configureStore({
reducer: {
counter: counterSlice.reducer,
user: userSlice.reducer,
},
})

export default store // store 내보내기

```

</details>

<!-- <p style="font-size:16px;font-weight:600;font-style:italic;color: white;padding-left:5px;background-color: rgb(250, 104, 209);margin:0;line-height:30px;height:30px">store.js</p> -->