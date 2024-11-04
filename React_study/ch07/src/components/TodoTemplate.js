import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   // children = <TodoInsert/>, <TodoList/> 컴포넌트
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}
export default TodoTemplate
