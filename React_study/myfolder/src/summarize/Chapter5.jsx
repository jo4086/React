import React, { useState, useCallback, useRef } from 'react'

function Chapter5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '눈' },
      { id: 3, text: '겨울' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')
   const nextId = useRef(5)

   const onChange = useCallback((e) => setInputText(e.target.value))

   const onClick = () =>
      useCallback(
         (e) => {
            const nextNames = names.concat({
               id: nextId,
               text: inputText,
            })
            setNames(nextNames)

            nextId.current += 1

            setInputText('')
         },
         [names]
      )

   const onRemove = useCallback(
      (id) => {
         const nextNames = names.filter((name) => name.id !== id)
         setNames(nextNames)
      },
      [names]
   )

   const nameList = names.map((name) => (
      <li
         key={name.id}
         onDoubleClick={() => {
            onRemove(name.id)
         }}
      >
         {name.text}
      </li>
   ))

   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}></button>
         <ul>{nameList}</ul>
      </>
   )
}

export default Chapter5
