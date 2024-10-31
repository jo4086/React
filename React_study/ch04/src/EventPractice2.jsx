import React, { useState } from 'react'

const EventPractice2 = () => {
   //form의 초기값은 json객체 저장(username, message가 빈문자열)
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }

      setForm(nextForm)
   }

   const onClick = () => {
      //클릭시 username, message값 출력후 username, message값 비워줌
      alert(`첫번쨰 입력값: ${username}, 두번째 입력값:${message}`)
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }
   // function onKeyDown(e) {
   //    if (e.key === 'Enter') {
   //       onClick()
   //    }
   // }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="이벤트2 입력" value={username} onChange={onChange} />

         <input type="text" name="message" placeholder="이벤트2 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />

         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice2
