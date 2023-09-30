import React from 'react'

const SearchResult = ({filtered}) => {
    return (
    <div>
        <h2>Results for Flights</h2>
        <div>
            {
                filtered.map(flight=>{return(
                    <div>
                        <p>{flight.flight_service_provider}</p>
                        <p>{flight.from}:{flight.departure_time}</p>
                        <p>{flight.to}:{flight.arrival_time}</p>
                        <p>{flight.price}</p>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default SearchResult