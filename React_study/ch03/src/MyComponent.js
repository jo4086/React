// 1. 컴포넌트 작성 시 파일명은 대문자로 시작
// 2. 화살표 함수나 function 함수로 작성
// 3. 함수명은 파일명으로 똑같이 작성 (대체적으로 이렇게 많이 사용
// 4. 외부에서 컴포넌트를 사용하기 위해 마지막에 무조건 export해준다.

/* const MyComponent1 = () => {
    return (
        <div>
            <div>안녕하세요. 제 이름은 입니다.
            </div>
        </div>
    )
} */

const MyComponent2 = (props) => {
   //    console.log(props)
   // props = {name:'하서', job:'강사', forNumber:1,children:'맑음'}
   //    const { name, job, forNumber, children } = props
   return (
      //   <div>
      //      <div>안녕하세요. 제 이름은 {props.name} 입니다.</div>
      //      <div>
      //         제 직업은 {rpops.jop} 입니다. 숫자는 {props.forNumber}
      //      </div>
      //      <div>children은 {props.children} 입니다. </div>
      //    </div>

      <div>
         <div> 안녕하세요. 제 name = {props.name} 입니다.</div>
         <div>
            제 job = {props.job} 입니다. 숫자는 {props.forNumber}
         </div>
         <div>children은 {props.children} 입니다. </div>
         <div>.</div>
      </div>
   )
}
const MyComponent3 = ({name="기본이름", job="강사", forNumber="1",children="맑음" }) => {
   //    console.log(props)
   // props = {name:'하서', job:'강사', forNumber:1,children:'맑음'}
   //    const { name, job, forNumber, children } = props
   return (
      //   <div>
      //      <div>안녕하세요. 제 이름은 {props.name} 입니다.</div>
      //      <div>
      //         제 직업은 {rpops.jop} 입니다. 숫자는 {props.forNumber}
      //      </div>
      //      <div>children은 {props.children} 입니다. </div>
      //    </div>

      <div>
         <div> 안녕하세요. 제 name = {name} 입니다.</div>
         <div>
            제 job = {job} 입니다. 숫자는 {forNumber}
         </div>
         <div>children은 {children} 입니다. </div>
         <div>.</div>
      </div>
   )
}

const MyComponent = (props) => {
   //    console.log(props)
//    props = {name:'하서', forNumber:1,children:'맑음'}
      const { name, job, forNumber, children } = props
   return (
      //   <div>
      //      <div>안녕하세요. 제 이름은 {props.name} 입니다.</div>
      //      <div>
      //         제 직업은 {rpops.jop} 입니다. 숫자는 {props.forNumber}
      //      </div>
      //      <div>children은 {props.children} 입니다. </div>
      //    </div>

      <div>
         <div> 안녕하세요. 제 name = {props.name} 입니다.</div>
         <div>
            제 job = {props.job} 입니다. 숫자는 {props.forNumber}
         </div>
         <div>children은 {props.children} 입니다. </div>
         <div>.</div>
      </div>
   )
}

// 존재하지 않는 props는 default로 지정
MyComponent.defaultProps = {
   name: 'default : 학생명',
   job: 'default : 학생',
}

export default MyComponent
