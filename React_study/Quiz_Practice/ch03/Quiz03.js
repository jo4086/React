import React, { useState } from 'react'
import Quiz03_sub from './Quiz03_sub'

function Quiz03() {
  const [message, setMessage] = useState("안녕하세요!")

  const updateMessage = () => {
    setMessage("반갑습니다!")
  }

  return (
    <div>
      <h1>{message}</h1>
      <Quiz03_sub updateMessage={updateMessage} />
    </div>
  )
}

export default Quiz03