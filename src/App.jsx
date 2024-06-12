
import { Card } from './component/Card'
import './sass/main.scss'
import { Provider } from 'react-redux';
import store from './store';
function App() {

  return (
    <>
     <Provider store={store}>
      <div className='container'>
          <Card/>
       </div>
       </Provider>
    </>
  )
}

export default App
