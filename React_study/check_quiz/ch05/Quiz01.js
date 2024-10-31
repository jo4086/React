import React, { useState } from 'react'

function Quiz01() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])

   const [employee, setEmployee] = useState('')
   const [depts, setDepts] = useState('')
   const [nextId, setNextId] = useState(5)

   // const onChange = (e) => {
   //    setEmployee.(e.target.value)
   //    setDepts(e.target.value)
   // }
   const onChangeName = (e) => setEmployee(e.target.value)
   const onChangeDpet = (e) => setDepts(e.target.value)

   const onClick = () => {
      const nextInfo = employees.concat({
         id: nextId,
         name: employee,
         dept: depts,
      })
      setNextId(nextId + 1)
      setEmployees(nextInfo) // 정보 갱신
      setEmployee('') // 이름 초기화
      setDepts('') // 개발 초기화
   }

   const employeesList = employees.map((employee) => (
      <li key={employee.id}>
         사원명{employee.name}, 부서{employee.dept}
      </li>
   ))

   return (
      <>
         <input value={employee} onChange={onChangeName} />
         <input value={depts} onChange={onChangeDpet} />
         <button onClick={onClick}>추가</button>
         <ul>{employeesList}</ul>
      </>
   )
}

export default Quiz01
