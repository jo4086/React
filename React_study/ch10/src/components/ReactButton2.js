import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트 (변수명 대문자)
// 벡틱 안에 css형식으로 작성

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

function ReactButton2() {
   // styled-components를 컴포넌트로 사용
   return <StyledButton>버튼</StyledButton>
}
export default ReactButton2
