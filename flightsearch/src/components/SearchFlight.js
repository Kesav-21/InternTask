import React,{useState} from 'react'
import { flights } from '../data/flights'
import SearchResult from './SearchResult'

const SearchFlight = () => {
  const [isOneWay,setIsOneWay]=useState(true)
  const passengers=[1,2,3,4,5,6,7,8,9]
  const [from,setFrom]=useState("")
  const [to,setTo]=useState("")
  const [deptDate,setDeptDate]=useState("")
  const [retDate,setRetDate]=useState("")
  const [selected,setSelected]=useState(passengers[0])
  const [availableFlights,setAvailableFlights]=useState([])
  const [today,setToday]=useState(new Date().toISOString().split('T')[0])

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(flights.filter(flight=>flight.departureCity.toLowerCase()==from.toLowerCase() && flight.arrivalCity.toLowerCase()==to.toLowerCase()
        || flight.departureCityCode==from.toUpperCase() && flight.arrivalCityCode==to.toUpperCase()))
        setAvailableFlights(flights.filter(flight=>flight.departureCity.toLowerCase()==from.toLowerCase() && flight.arrivalCity.toLowerCase()==to.toLowerCase()
        || flight.departureCityCode==from.toUpperCase() && flight.arrivalCityCode==to.toUpperCase()))        
    }

    const handleFromInput=(e)=>{
        setFrom(e.target.value)
    }
    const handleToInput=(e)=>{
        setTo(e.target.value)
    }
    const handleDeptDateInput=(e)=>{
        setDeptDate(e.target.value)
    }
    const handleRetDateInput=(e)=>{
        setRetDate(e.target.value)
    }
    const handlePassengerInput=(e)=>{
        setSelected(e.target.value)
    }

  const handleTripChange=()=>{
    setIsOneWay(!isOneWay)
  }

  return (
    <div className='flight-search'>
        <div className='search-form'>
        <div className='tripselection'>
            <button onClick={handleTripChange} disabled={isOneWay}>One way</button>
            <button onClick={handleTripChange} disabled={!isOneWay}>Round Trip</button>
        </div>
        <div className='trip-search-container'>
        <form onSubmit={handleSubmit}>
            <div>
                <label>From:</label>
                <input type='text' value={from} onChange={handleFromInput} placeholder='Enter Origin City'/>
            </div>
            <div>
                <label>To:</label>
                <input type='text' value={to} onChange={handleToInput} placeholder='Enter Destination City'/>
            </div>
            <div>
                <label>Departure Date:</label>
                <input type='date' id="inputdate" value={deptDate} min={today} onChange={handleDeptDateInput}/>
            </div>
            {
                isOneWay? null:<div>
                <label>Return Date:</label>
                <input type='date' id="inputdate" value={retDate} min={today} onChange={handleRetDateInput}/>
            </div>
            }

            <div>
                <label>Passengers:</label>
                <select value={selected} onChange={handlePassengerInput}>
                    {passengers.map(num=>
                        <option key={num} value={num}>{num}</option>
                    )}
                </select>
            </div>
            <button type='submit'>Search</button>
        </form>
    </div>
    </div>
    <SearchResult oneway={isOneWay} filtered={availableFlights} 
    from={from!=""? from[0].toUpperCase()+from.slice(1):""} 
    to={to!=""? to[0].toUpperCase()+to.slice(1):""}
    deptDate={deptDate}
    retDate={retDate}/>
    </div>
  )
}

export default SearchFlight