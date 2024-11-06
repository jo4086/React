import styled, { css } from 'styled-components'
import { StyleSheetManager } from 'styled-components'

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
   return <button className={[props.className]}>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

/* &는 현재 컴포넌트를 의미
가상클래스(:hover, :focus, :active)나 가상요소(::before, ::after)와 결합해서 사용함 */
const PrimaryButton = styled.button/* `
   color : ${(props) => 'green'};
      color: ${(props) => (props.primary === 'primary' ? 'tan' : 'blue')};

`
 */ `
   color: ${(props) => (props.primary ? 'gold' : 'brown')};

   background-color: ${(props) => (props.primary ? 'gray' : 'pink')};

   font-size: ${(props) => (props.variant === 'yes' ? '25px;' : '12px')};
   &:hover {
      background-color: darkblue;
      color: white;
   }
`
/* const PrimaryButton = styled.button`
   color: ${(props) => {
      console.log(props)
   }};
`
 */
/* const PrimaryButton = styled.button`
   color: yellow;
   background-color: gray;
` */

function ReactButton6() {
   // styled-components를 컴포넌트로 사용
   return (
      <div>
         {/* <StyleSheetManager shouldForwardProp={shouldForwardProp}> */}
         <StyleSheetManager enableVendorPrefixes>
            <StyledButton>버튼</StyledButton>
            <LargeButton>큰버튼</LargeButton>
            <ReactButton>React</ReactButton>
            <ReactLargeButton>React Large</ReactLargeButton>
            <PrimaryButton>Primary</PrimaryButton>
            <PrimaryButton primary>Primary</PrimaryButton>
            {/* <PrimaryButton primary="primary">Primary</PrimaryButton> */}
            {/* <PrimaryButton $primary="primary">$Primary</PrimaryButton> */}
            {/* <PrimaryButton variant="yes">Primary</PrimaryButton> */}
            {/* </StyleSheetManager> */}
         </StyleSheetManager>
      </div>
   )
}
export default ReactButton6
