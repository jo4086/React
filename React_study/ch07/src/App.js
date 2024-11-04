import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import React, { useState, useRef, useCallback } from 'react'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   const nextId = useRef(4)

   // 할 일 등록
   const onInsert = useCallback(
      (text) => {
         const todo = {
            id: nextId.current, //ref값인 (4)를 가져옴
            text, //text: text,
            checked: false,
         }
         setTodos(todos.concat(todo))
         nextId.current += 1
      },
      [todos]
   )

   // 할 일 삭제
   const onRemove = useCallback(
      (id) => {
         const removeTodos = todos.filter((todo) => todo.id !== id)
         setTodos(removeTodos)
      },
      [todos]
   )
   // 할 일 완료, 미완료(토글)
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) =>
            todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked, //checked 값을 덮어씀
                 }
               : todo
         )
         setTodos(toggleTodos)
      },
      [todos]
   )
   return (
      <TodoTemplate>
         {/* 컴포넌트를 children props로 전달 */}
         <TodoInsert onInsert={onInsert} />

         {/* todos는 TodoListItem 컴포넌트에서 사용하므로 props로 전달 */}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
