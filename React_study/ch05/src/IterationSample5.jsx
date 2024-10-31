import React, { useState } from 'react'

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChange = (e) => setInputText(e.target.value)

   // 사용자가 input에 입력한 값을 names state에 추가하는 함수
   const onClick = () => {
      // concat() : 두개 이상의 배열을 합치는 함수
      const nextNames = names.concat({
         id: nextId, // 5
         text: inputText, // input창에서 사용자가 입력한 값
      })

      setNames(nextNames) //names state를 합친 배열로 변경
      setNextId(nextId + 1) // 다음에 데이터 추가시 nexdId를 1씩 증가시키기 위해
      setInputText('') // 추가 버튼 클릭 후 input창에 작성한 글자가 빈문자열이 되도록 만든다
   }

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
