x

function IterationSample() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)

   /*
   nameList = [<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]
   */
   return <ul>{nameList}</ul>
}

export default IterationSample
