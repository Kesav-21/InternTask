import SearchFlight from './components/SearchFlight'
import './Flight.css'

function App() {
  return (
    <div>
        <header>
          <img src="https://www.svgrepo.com/download/302769/flight-route-traveling.svg" width={100} height={100}/>
          <h1>Flight Search Engine</h1>
        </header>
        <SearchFlight/>
    </div>
  );
}

export default App;
