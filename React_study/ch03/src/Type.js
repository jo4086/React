function Type(props) {
   //    const { str, num, bool, arr, json, func } = props
   const { str, bool, arr, json, func, func2, func3, func4 } = props
   props = { num: 5 }
   const result2 = func2(1, 2)
   const result3 = func3(3, 5)

   return (
      <div>
         <p>StringProps: {str}</p>
         <p>NumberProps: {props.num}</p>
         <p>BooleanProps: {bool.toString()}</p>
         <p>ArrayProps: {arr.toString()}</p>
         <p>JSONProps: {JSON.stringify(json)}</p>
         <p>FunctionProps: console.log 확인{func}</p>
         <p>FunctionProps2: {result2}</p>
         <p>FunctionProps3: {result3}</p>
         <p>FunctionProps3: {func4(5, 4)}</p>
      </div>
   )
}
export default Type
