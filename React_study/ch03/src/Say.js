import React, { useState } from 'react'

// 리액트는 처음에 함수를 다 읽고 이후 컴포넌트의--
// state가 바뀌면 컴포넌트가 리 렌더링되고 function 안의 소스코드가 다시 실행
const Say = () => {
   // 메시지를 바꾸는 state 함수.
   const [message, setMessage] = useState('초기값')
   const onClickEnter = () => setMessage('안녕하세요')
   const onClickLeave = () => setMessage('안녕히 가세요')

   /* 
    1. useState 선언
        const [state값, state값을 바꿀 함수] = useState(초기값)
    2. useState 사용
        state값을 바꿀함수(업데이트 값)

        컴포넌트 내부에서 바뀌는 값을 저장하는게 state
     */
   const [color, setColor] = useState('black')

   const onClickRed = () => setColor('red')
   const onClickGreen = () => setColor('green')
   const onClickBlue = () => setColor('blue')

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         <button onClick={onClickRed}> 빨강 </button>
         <button onClick={onClickGreen}> 그린 </button>
         <button onClick={onClickBlue}> 블루 </button>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            빨강
         </button>

         <button
            onClick={() => {
               setColor('green')
            }}
         >
            초록
         </button>

         <button
            onClick={() => {
               setColor('blue')
            }}
         >
            파랑
         </button>
      </div>
   )
}

export default Say