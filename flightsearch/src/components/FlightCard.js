import React from 'react'

const FlightCard = ({flight,oneway}) => {
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
            <img src="#"/>
            <button>Book this flight</button>
        </div>
    </div>
  )
}

export default FlightCard