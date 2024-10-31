import React, { useState } from 'react'

const Quiz01 = () => {
   const [form, setForm] = useState({
      val1: 0,
      val2: 0,
      val3: 0,
   })

   const { val1, val2, val3 } = form

/*    console.groupCollapsed('form 초기값')
   console.log('%cform :', 'font-Weight:bold', form)
   console.log('%cObject.keys(form) :', 'font-Weight:bold', Object.keys(form))
   console.log('%cObject.values(form)', 'font-Weight:bold', Object.values(form))
   console.groupCollapsed('%cJSON.stringify(form, null, 3)\n', 'font-Weight:bold')
   console.log(JSON.stringify(form, null, 3))
   console.groupEnd()
   console.groupEnd()
 */
   const onChange = (e) => {
      // console.log(e)
      const nextForm = {
         ...form,         
         [e.target.name]: e.target.value,
      }
      console.log(nextForm)
      console.log(Object.keys(nextForm))
      console.log(Object.values(nextForm))
      console.log(JSON.stringify(nextForm, null, 3))
      setForm(nextForm)
   }

   const onClick = () => {
      alert(`합: ${Number(val1) + Number(val2) + Number(val3)}`)
      // 이 부분 작성
      setForm({ val1: 0, val2: 0, val3: 0 })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="val1" value={val1} onChange={onChange} />

         <input type="text" name="val2" value={val2} onChange={onChange} />

         <input type="text" name="val3" value={val3} onChange={onChange} onKeyDown={onKeyDown} />

         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default Quiz01

/*
   const [form, setform] = useState({
      username: '',
      mesage: '',
      email: '',
   })
   const { username, message, email } = form
   
   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }
      setform(nextForm)
   }

   const onClick = () => {
      alert(`더한ㄱ밧`)
   }
   const onKeyDown
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" />
         <input type="text" name="message" placeholder="메시지 입력" />
         <input type="text" name="email" placeholder="이메일 입력" />
         <button>확인</button>
      </div>
   )  */
