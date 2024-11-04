import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import React, { useState, useCallback } from 'react'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')

   const onChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])

   // [input]의 /submit/ 실행시키는 이벤트 함수
   const onSubmit = useCallback(
      (e) => {
         onInsert(value) // props로 전달 받은 onInsert 함수 실행
         setValue('') // value값 초기화

         // submit 이벤트는 브라운저에서 새로고침을 발생시킴 => 이를 방지하기 위해 사용
         e.preventDefault()
      },
      [onInsert, value]
   )

   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}
export default TodoInsert
