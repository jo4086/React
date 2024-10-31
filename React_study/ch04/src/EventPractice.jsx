import React, { useState } from 'react'

function EventPractice() {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)

   const onClick = (e) => {
      // 사용자가 input창에 입력한 state값 출력
      alert(`첫번째 입력값: ${username}. 두번째 입력값: ${message}`)
      setUsername('')
      setMessage('')
   }

   // 엔터를 눌렀을 떄 onclick() 실행
   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무 값 입력" value={username} onChange={onChangeUsername} />

         <input type="text" name="message" placeholder="아무 값 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         {/* 둘다 입력하였을 때만 버튼 활성화 */}
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}
export default EventPractice
