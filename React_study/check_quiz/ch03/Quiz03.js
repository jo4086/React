function Quiz03(props) {
//    const { name3, age3, phone3, children } = props
const {name3, age3, phone3, children} = props
   return (
      <div>
         <h2>학생정보</h2>
         <ul>
            <li>이름: {name3}</li>
            <li>나이: {age3}세</li>
            <li>핸드폰 번호: {phone3}</li>
            {/* <li>학과: {children}</li> */}
            <li>학과: {children}</li>
         </ul>
      </div>
   )
}

Quiz03.defaultProps = {
   age3: 24,
}

export default Quiz03
