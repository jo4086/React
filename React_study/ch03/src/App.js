// import  exprot 해주는 걸 어떤 이름으로 사용할걵;(exoprt 이름과 똑같이 사용 권장)
import MyComponent from './MyComponent'
import Type from './Type'
import Say from './Say'
import InputText from './InputText'
function App1() {
   // MyComponent.js
   return (
      <div>
         <h1>반가워</h1>
         <MyComponent name="준근" forNumber={10}>
            맑음
         </MyComponent>
         <MyComponent forNumber={10}>맑음</MyComponent>
      </div>
   )
}

function App2() {
   // Type.js
   const func3 = (a, b) => {
      return a + b
   }
   const func4 = (a, b) => {
      return a + b
   }
   return (
      <Type
         str="react"
         num={200}
         bool={1 == 1}
         arr={[0, 1, 2]}
         json={{ react: '리액트', time: 2 }}
         func={console.log('Hello function Props!')}
         func2={(a, b) => {
            return a + b
         }}
         func3={func3} // 리턴문 위에 const로 따로 작성
         func4={func4} // 리턴문 위에 const로 따로 작성
      />
   )
}
function App3() {
   //state.js
   return <Say />
}
function App() {
   //InputText.js
   return <InputText />
}
export default App
