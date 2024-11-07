import { Provider } from 'react-redux'
import Counter from './UseToolkit/Counter.jsx'
import User from './UseToolkit/User.jsx'
import storeUseToolkit from './UseToolkit/store'

function App() {
   return (
      <Provider store={storeUseToolkit}>
         <div>
            <Counter />
            <User />
         </div>
      </Provider>
   )
}

export default App
