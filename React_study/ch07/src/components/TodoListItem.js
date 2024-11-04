import './css/TodoListItem.css'
import { MdRemoveCircleOutline, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import classnames from 'classnames'

function TodoListItem({ todo, onRemove, onToggle }) {
   const { id, text, checked } = todo

   return (
      <div className="TodoListItem">
         {/* <div className="checkbox checked"> */}
         <div
            className={classnames('checkbox', { checked })}
            onClick={() => {
               onToggle(id)
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div
            className="remove"
            onClick={() => {
               onRemove(id)
            }}
         >
            <MdRemoveCircleOutline />
         </div>
      </div>
   )
}

export default TodoListItem
