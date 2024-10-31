import React, { useState } from 'react'

function Quiz02_sol() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])

   const [inputName, setInputName] = useState('')
   const [inputStatus, setInputStatus] = useState('미완료') // 기본값을 '미완료'로 설정
   const [nextId, setNextId] = useState(3)

   const onChangeName = (e) => setInputName(e.target.value)

   //select 박스에서는 option 태그의 value속성값을 가져온다
   const onChangeStatus = (e) => setInputStatus(e.target.value)

   const onClick = () => {
      if (inputName.trim() === '') return // 빈 값은 추가하지 않음
      const nextProjects = projects.concat({
         id: nextId,
         name: inputName,
         status: inputStatus,
      })

      //추가된 값으로 projects state변경
      setProjects(nextProjects)

      //초기화
      setInputName('')
      setInputStatus('미완료')
      setNextId(nextId + 1)
   }

   const onRemove = (id) => {
      const nextProjects = projects.filter((project) => project.id !== id)
      setProjects(nextProjects)
   }

   const projectList = projects.map((project) => (
      <li key={project.id} onDoubleClick={() => onRemove(project.id)}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))

   return (
      <>
         <input placeholder="프로젝트 이름" value={inputName} onChange={onChangeName} />
         <select value={inputStatus} onChange={onChangeStatus}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={onClick}>추가</button>
         <ul>{projectList}</ul>
      </>
   )
}

export default Quiz02_sol
