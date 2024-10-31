import React, { useState } from 'react'
import Quiz03_sub_sol from './Quiz03_sub_sol'

function Quiz03_sol() {
  const [message, setMessage] = useState("안녕하세요!")

  const updateMessage = () => {
    setMessage("반갑습니다!")
  }

  return (
    <div>
      <h1>{message}</h1>
      <Quiz03_sub_sol updateMessage={updateMessage} />
    </div>
  )
}

export default Quiz03_sol