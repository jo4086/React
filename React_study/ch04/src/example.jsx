import React, { useState } from 'react'

// useState 사용하기 (함수형 컴포넌트)

const Counter = () => {
   // count라는 state 변수와 setCount라는 업데이트 함수를 선언
   const [count, setCount] = useState(0)

   const increment = () => {
      setCount(count + 1) // setCount를 통해 state 업데이트
   }

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
      </div>
   )
}

export default Counter

/* 
// class형 컴포넌트
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }; // state 초기화
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 }); // state 업데이트
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;

 */
