import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import React, { useState } from 'react'

function Quiz02() {
   return (
      <div>
         <img src={step1} width="150" />
         <br />
         <img src={step2} width="150" />
         <br />
         <p></p>
         <button>이상해씨 다음은?</button>
      </div>
   )
}

export default Quiz02
