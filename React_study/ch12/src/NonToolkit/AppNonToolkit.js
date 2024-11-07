import { Provider } from 'react-redux'
import Counter from './NonToolkit/Counter'
import storeNonToolkit from './NonToolkit/store'

function App() {
   return (
      <Provider store={storeNonToolkit}>
         <Counter />
      </Provider>
   )
}

export default App
