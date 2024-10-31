import React, { useState } from 'react'

function Quiz03() {
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      const name = e.target.name
      const value = e.target.value

      if (name === 'message' && value.length > 20) return

      const nextForm = {
         ...form,
         [name]: value,
      }
      setForm(nextForm)
   }

   const onClick = () => {
      alert(`입력값: ${username}, ${message}`)
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" value={username} onChange={onChange} />
         <input type="text" name="message" placeholder="메시지 입력 (최대 20자)" value={message} onChange={onChange} onKeyDown={onKeyDown} />
         <div>현재 입력한 글자 수:{message.length} /20</div>
         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default Quiz03
