import './App.css';
import { getCountries } from './services/Countries.js';

function App() {
  getCountries();
  return <div className="App">App</div>;
}

export default App;
