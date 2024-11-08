import Counter from './CountRedux/Counter'
import { Provider } from 'react-reudx'
import store from './CountRedux/store'

function Chapter12() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}
export default Chapter12