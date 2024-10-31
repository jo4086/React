function Quiz02({name2, age2, phone2, children}) { 
    return (
       <div>
          <h2>학생정보</h2>
          <ul>
             <li>이름: {name2}</li>
             <li>나이: {age2}세</li>
             <li>핸드폰 번호: {phone2}</li>
             <li>학과: {children}</li>
          </ul>
       </div>
    )
}

export default Quiz02