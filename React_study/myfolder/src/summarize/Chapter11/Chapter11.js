import Counter from './CountRedux/Counter.jsx'
import { Provider } from 'react-redux'
import store from './CountRedux/store'

function Chapter11() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}
export default Chapter11