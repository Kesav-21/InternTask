import './App.css';
import {flights} from './data/data'
import {useState } from 'react';
import SearchFlight from './components/SearchFlight'

function App() {
  const [flight,setFlight]=useState(flights)
  return (
    <div>
        <h1>Flight Search Engine</h1>
        <SearchFlight flights={flights}/>
    </div>
  );
}

export default App;
