import React, { useState } from 'react'
import './App.css'

const Quiz03_sol = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '메타몽', img: '/images/메타몽.png' },
      { id: 3, name: '파이리', img: '/images/파이리.png' },
   ])

   const [inputName, setInputName] = useState('')
   const [nextId, setNextId] = useState(4)

   const onChange = (e) => setInputName(e.target.value)

   //concat() 2개 이상의 배열을 합치는 메소드

   const onClick = () => {
      const nextPokes = pokemons.concat({
         id: nextId, //nextId값을 id로 설정하고
         name: inputName,
         img: '/images/' + inputName + '.png',
      })

      setPoke(nextPokes) //pokes 값을 업데이트 한다
      setNextId(nextId + 1) //nextId에 1을 더해준다
      setInputName('') //inputName 비운다
   }

   const onRemove = (id) => {
      const nextPokes = pokemons.filter((poke) => poke.id !== id)
      setPoke(nextPokes)
   }

   const pokesList = pokemons.map((poke) => (
      <li key={poke.id} onDoubleClick={() => onRemove(poke.id)}>
         <div>
            <img src={poke.img} alt={poke.name} width="130" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input value={inputName} onChange={onChange}></input>
         <button onClick={onClick}>등록</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default Quiz03_sol
