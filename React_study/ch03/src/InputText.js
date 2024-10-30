import React, { useState } from 'react'

function InputText() {
   // 리액트에서 input창에 입력한 값을 출력하는 방법
   // change 이벤트 사용
   // change: select, 체크박스, 라디오 등 상태 변경될 때 사용

   const [text, setText] = useState('hello world')
   // const onChangeText = (e) => {
   //     e.
   // }

   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={(e) => {
               console.log(e)
               setText(e.target.value)
            }}
         />
         <p>입력한 값: {text}</p>
      </div>
   )
}

export default InputText
