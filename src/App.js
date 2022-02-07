import logo from './logo.svg';
import './App.css';
import Input from './Components/Input'
import Gallery from './Components/Gallery'
import store from './store'
import { StoreProvider,createStore } from 'easy-peasy'
const Store=createStore(store)
function App() {
  return (
    <StoreProvider store={Store}>
      <div>
        <Input/>
        <Gallery/>
      </div>
    </StoreProvider>
  );
}

export default App;
