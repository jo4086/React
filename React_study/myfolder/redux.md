# Redux

## 목차

1. [Redux란?](#1-redux란)
   1. 개요
   2. 사용법
   3. [예시코드 바로가기](#1-3-예시코드)

### 1. Redux란?

### 1-1. 개요

### 1-2. 사용법

### 1-3. 예시코드

> ###### [[목차로 돌아가기]](#목차)
>
> ###### [[전체 코드 링크]](#extra-코드-전문)

### **1. [import ~ Line]**

<details>
<summary>
[접기/펼치기]
</summary>

```
import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
```

</details>

### **2. [reducer ~ Line]**

<details>
<summary>
[접기/펼치기]
</summary>

```
function reducer(currentState, action) {
   if (currentState === undefined) {
      return { number: 1 }
   }
   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++
   }

   return newState
}
const store = createStore(reducer)
```

</details>

> ### **3. [components ~ _Line_]**
>
> <details>
> <summary>
> [접기/펼치기]
> </summary>
>
> ```
>
> function Left1() {
> return (
>
> <div>
> <h1>Left1</h1>
> <Left2></Left2>
> </div>
> )
> }
>
> function Left2() {
> return (
>
> <div>
> <h1>Left2</h1>
> <Left3></Left3>
> </div>
> )
> }
>
> function Left3() {
> const number = useSelector((state) => state.number)
>
> return (
>
> <div>
> <h1>Left3: {number}</h1>
> </div>
> )
> }
>
> function Right1() {
> return (
>
> <div>
> <h1>Right1</h1>
> <Right2 />
> </div>
> )
> }
>
> function Right2() {
> return (
>
> <div>
> <h1>Right2</h1>
> <Right3 />
> </div>
> )
> }
>
> function Right3() {
> const dispatch = useDispatch()
> return (
>
> <div>
> <h1>Right3</h1>
> <input
> type="button"
> value="+"
> onClick={() => {
> dispatch({ type: 'PLUS' })
> }}
> />
> </div>
> )
> }
> ```
>
> </details>
>
> #### _3-1. **프레젠테이셔널 컴포넌트** ( **Presentational Component** = 일반형 컴포넌트 )_
>
> ###### = **_Left1 ( ), Left2 ( ),Right1 ( ), Right2 ( )_**
>
> -  React에서 크게 특별한 기능을 수행하지 않음
> -  단순한 UI 구성 => 주로 props를 통해 데이터를 받아서 보여줌
> -  일반적으로 상태나 라이프사이클 메서드를 가지지 않음
> -  재사용이 쉬움
>
> #### _3-2. **컨테이너 컴포넌트** ( **Container Component** )_
>
> ###### **_= Left3 ( ), Right3 ( )_**
>
> -  React에서 주로 **데이터와 로직**의 수행을 담당
> -  로컬 상태 : [ useState ]
> -  전역 상태 관리 라이브러리 : [ Redux ], [ Context API ], [ MobX ]
> -  외부 API 요청을 데이터 호출 및 관리
>    -  [ RESTful API ]
>    -  [ GraphQL ]
>    -  [ WebSockets ]
>    -  [ gRPC ]
>    -  [ SOAP (Simple Object Access Protocol) ]
> -  이렇게 조작한 데이터들을 **프레젠테이셔널 컴포넌트** 에 전달
> -  ★ 최종 목적으로는 **데이터의 조작**이 있어야함

```
function App() {
return (

<div className="container">
<h1>Root</h1>
<div className="grid">
<Provider store={store}>
<Left1 />
<Right1 />
</Provider>
</div>
</div>
)
}

export default App

```

### Extra. 코드 전문

###### [[목차로 돌아가기]](#목차)

<details>
<summary>
예시 코드 [접기/펼치기]
</summary>

```

import './App.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

function reducer(currentState, action) {
if (currentState === undefined) {
return { number: 1 }
}
const newState = { ...currentState }

if (action.type === 'PLUS') {
newState.number++
}

return newState
}

const store = createStore(reducer)

function Left1() {
return (

<div>
<h1>Left1</h1>
<Left2></Left2>
</div>
)
}

function Left2() {
return (

<div>
<h1>Left2</h1>
<Left3></Left3>
</div>
)
}

function Left3() {
const number = useSelector((state) => state.number)

return (

<div>
<h1>Left3: {number}</h1>
</div>
)
}

function Right1() {
return (

<div>
<h1>Right1</h1>
<Right2 />
</div>
)
}

function Right2() {
return (

<div>
<h1>Right2</h1>
<Right3 />
</div>
)
}

function Right3() {
const dispatch = useDispatch()
return (

<div>
<h1>Right3</h1>
<input
type="button"
value="+"
onClick={() => {
dispatch({ type: 'PLUS' })
}}
/>
</div>
)
}

function App() {
return (

<div className="container">
<h1>Root</h1>
<div className="grid">
<Provider store={store}>
<Left1 />
<Right1 />
</Provider>
</div>
</div>
)
}

export default App

```

</details>
```
