function Quiz01({ name1, age1, phone1, major1 }) {
   return (
      <div>
         <h2>학생정보</h2>
         <ul>
            <li>이름: {name1}</li>
            <li>나이: {age1}세</li>
            <li>핸드폰 번호: {phone1}</li>
            <li>학과: {major1}</li>
         </ul>
      </div>
   )
}

export default Quiz01
