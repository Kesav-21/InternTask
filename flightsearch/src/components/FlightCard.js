import React from 'react'

const FlightCard = ({flight}) => {
  return (
    <div className='flight-card-container'>
        <div className='flight-info'>
        <p>{flight.company}</p>
        <p>Flight ID:{flight.f_id}</p>
        <p>Duration:{flight.duration}</p>
        <p>Rs.{flight.price}</p>
        </div>
        <p>{flight.departureCity}:{flight.departureTime}</p>
        <p>{flight.arrivalCity}:{flight.arrivalTime}</p>
        <button>Book this flight</button>
    </div>
  )
}

export default FlightCard