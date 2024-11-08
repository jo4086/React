import React, { useState } from 'react'

function Chapter4() {
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      const nextForm = {
         ...form, // 객체에서 username인지 message인지 구분 못함
         [e.target.name]: e.target.value, // target.name은 해당 인풋에서 name="username"을 가져오고 그 값은 value={username}으료 교체된다.
      }
      setForm(nextForm) // setForm에 nextForm을 입력해 불변성을 유지하며 state 교체
   }

   return (
      <div>
         <input type="text" name="username" value={username} onChange={onChange} />
         <input type="text" name="message" value={message} onChange={onChange} />
      </div>
   )
}

export default Chapter4
