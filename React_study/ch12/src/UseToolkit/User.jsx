import { useDispatch, useSelector } from 'react-redux'
import { setName, setAge } from './userSlice' // userSlice.actions

function User() {
   const dispatch = useDispatch()
   /*     useSelector(state) = store = {reducer:{counter:counterSlice.reducer,user:userSlice.reducer}}
    
   state = store가 되어
   state = {reducer:{counter:counterSlice.reducer,user:userSlice.reducer}}이므로
   
   state.user*/
   const { name, age } = useSelector((state) => state.user)
   return (
      <div>
         <input type="text" placeholder="이름" onChange={(e) => dispatch(setName(e.target.value))} />
         <input type="number" placeholder="나이" onChange={(e) => dispatch(setAge(Number(e.target.value)))} />
         <p>이름: {name}</p>
         <p>나이: {age}</p>
      </div>
   )
}

export default User
