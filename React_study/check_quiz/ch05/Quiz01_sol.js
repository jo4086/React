import React, { useState } from 'react'

function Quiz01_sol() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])

   const employeeList = employees.map((employee) => (
      <li key={employee.id}>
         사원명:{employee.name}, 부서: {employee.dept}
      </li>
   ))
   return <ul>{employeeList}</ul>
}

export default Quiz01_sol
