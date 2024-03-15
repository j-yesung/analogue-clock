import { Provider } from 'react-redux';
import Clock from './components/Clock';
import store from './redux/store/store';

const App = () => (
  <Provider store={store}>
    <Clock />
  </Provider>
);

export default App;
