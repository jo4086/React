import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트 (변수명 대문자)
// 벡틱 안에 css형식으로 작성

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

// 리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   return <button className={[props.className] }>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
   font-size:50px;
`

function ReactButton5() {
   // styled-components를 컴포넌트로 사용
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>큰버튼</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </div>
   )
}
export default ReactButton5
