import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz04() {
   return (
      <div>
         <img src={step1} width="150" />
         <img src={step2} width="150" />
         <img src={step3} width="150" />
         <br />
         <button>이상해씨 진화!</button>
         <button>이상해풀 진화!</button>
         <p>진화 끝!</p>
      </div>
   )
}

export default Quiz04
