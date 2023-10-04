import React,{useEffect, useState} from 'react'
import { flights } from '../data/flights'
import SearchResult from './SearchResult'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const SearchFlight = () => {
    const [isOneWay,setIsOneWay]=useState(true)
    const passengers=[1,2,3,4,5,6,7,8,9]
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [today,setToday]=useState(new Date().toISOString().split('T')[0])
    const [deptDate,setDeptDate]=useState(`${today}`)
    const [retDate,setRetDate]=useState(`${today}`)
    const [selected,setSelected]=useState(passengers[0])
    const [availableFlights,setAvailableFlights]=useState([])
    const [refine,setRefine]=useState([])
    const [price,setPrice]=useState({
        min:1000,
        max:10000
    })
    useEffect(()=>{
        setRefine(availableFlights)
    },[availableFlights])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setAvailableFlights(flights.filter(flight=>(flight.departureCity.toLowerCase()==from.toLowerCase() && flight.arrivalCity.toLowerCase()==to.toLowerCase()
        || flight.departureCityCode==from.toUpperCase() && flight.arrivalCityCode==to.toUpperCase())))
        setRefine(availableFlights)
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

  const handleSearchRefine=()=>{
    if(isOneWay)
    setRefine(availableFlights.filter(flight=>flight.price>price.min && flight.price<price.max))
    else
    setRefine(availableFlights.filter(flight=>flight.return_trip.price>price.min && flight.return_trip.price<price.max))
  }

  return (
    <div className='flight-search'>
        <div className='search-form'>
        <div className='trip-selection'>
            <button onClick={handleTripChange} disabled={isOneWay}>One way</button>
            <button onClick={handleTripChange} disabled={!isOneWay}>Round Trip</button>
        </div>
        <div className='trip-search-container'>
        <form onSubmit={handleSubmit} className='trip-search-form'>
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
        <div className='refine-search'>
            <h2>Refine Search</h2>
            <InputRange
            maxValue={10000}
            minValue={0}
            value={price}
            formatLabel={val=>`Rs.${val}`}
            onChange={val=>setPrice(val)}
            onChangeComplete={handleSearchRefine}
            />
        </div>
    </div>
    </div>
    <SearchResult oneway={isOneWay} filtered={availableFlights.length==0?flights:refine} 
    from={from!=""? from[0].toUpperCase()+from.slice(1):""} 
    to={to!=""? to[0].toUpperCase()+to.slice(1):""}
    deptDate={deptDate}
    retDate={retDate} price={price}/>
    </div>
  )
}

export default SearchFlight