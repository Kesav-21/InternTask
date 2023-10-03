import React from 'react'

const FlightCard = ({flight,oneway}) => {
  const handleBook=()=>{
    alert("Booked this Flight");
  }
  return (
    <div className='flight-card-container'>
        <div className='info-section'>
        <div className='flight-info'>
        <p>{flight.company}</p>
        <p>Duration:{flight.duration}</p>
        {oneway?<p>Rs.{flight.price}</p>:<p>Rs.{flight.return_trip.price}</p>}
        
        </div>
        <div className={`${oneway?'onewaytrip':'trip-info'}`}>
        <div className={`${oneway?'flex-evenly':null}`}>
        <p>Flight ID:{flight.f_id}</p>
        <p>{flight.departureCityCode+" > "+flight.arrivalCityCode}</p>
        <p>{flight.departureTime+" ----> "+flight.arrivalTime}</p>
        </div>
        {oneway?null:
        <div>
            <p>Flight ID:{flight.f_id}</p>
            <p>{flight.return_trip.departureCityCode+" > "+flight.return_trip.arrivalCityCode}</p>
            <p>{flight.return_trip.retDepartureTime+" ----> "+flight.return_trip.retArrivalTime}</p>
        </div>
        }
    </div>
    </div>
        <div className='book-section'>
            <img src="https://images.unsplash.com/photo-1583202075376-837d5ff1bf0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" height={150} width={200}/>
            <button onClick={handleBook}>Book this flight</button>
        </div>
    </div>
  )
}

export default FlightCard