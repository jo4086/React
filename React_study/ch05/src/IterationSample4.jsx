import React, { useState } from 'react'


function IterationSample4() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   const [inputText, setInputText] = useState('')

   const onChange = (e) => setInputText(e.target.value)

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   return (
      <>
         <input value={inputText} onChange={onChange} />
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample4
