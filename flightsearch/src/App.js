import './App.css';
import FlightSearch from './components/FlightSearch';
import {flights} from './data/data'
import { useEffect, useState } from 'react';

function App() {
  const [flight,setFlight]=useState(flights)
  return (
    <div>
      <FlightSearch flights={flights}/>
    </div>
  );
}

export default App;
