import React, { useState } from 'react'

const Quiz01_sol = () => {
   const [form, setForm] = useState({
      val1: 0,
      val2: 0,
      val3: 0,
   })

   const { val1, val2, val3 } = form

   const onChange = (e) => {
      const nextForm = {
         ...form, //기존의 form 내용을 복사한 뒤
         [e.target.name]: e.target.value, //원하는 값을 덮어씌운다
      }

      setForm(nextForm) //덮어씌운 값으로 상태변화시킴
   }

   const onClick = () => {
      const result = Number(val1) + Number(val2) + Number(val3)
      alert('더한값:' + result)
      //state 값 초기화
      setForm({
         val1: 0,
         val2: 0,
         val3: 0,
      })
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

export default Quiz01_sol
