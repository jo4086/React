import React, { useState, useCallback, useRef } from 'react'

function Chapter5 () {
    const [names, setNames] = useState([
        {id:1, text: '눈사람'},
        {id:2, text: '눈'},
        {id:3, text: '겨울'},
        {id:4, text: '바람'},
    ])

    const [inputText, setInputText] = useState('')
    // const [nextId, setNextId] = useState(5)
    const nextId = useRef(5)

    const onChange = useCallback((e) => setInputText(e.target.value))

    const onClick= () => useCallback({
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        })
        setNames(nextNames)
        // setNextId(nextId +1)
        nextId.current +=1
        setInputText('')

    },[names])  // names가 작동할 때마다 가져옴 (useCallback)



    const onRemove = useCallback((id) => {
        const nextNames = names.filter((name) => name.id !== id)
        setNames(nextNames)
    },[names])

        const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => {onRemove(name.id)}}>
            {name.text}
        </li>
    ))
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}></button>
            <ul>{nameList}</ul>
        <>
    )
    // namelist에 항상 key를 줘야함
}
export default Chapter5