import React from 'react'

const SearchResult = ({oneway,filtered}) => {
    console.log(oneway,filtered)
    return (
    <div>
        <h2>Results for Flights</h2>
        <div>
            {oneway?
                filtered.map(flight=>{return(
                    <div className='result-list'>
                        <p>{flight.company}</p>
                        <p>{flight.departureCity}:{flight.departureTime}</p>
                        <p>{flight.arrivalCity}:{flight.arrivalTime}</p>
                        <p>Duration:{flight.duration}</p>
                        <p>{flight.price}</p>
                    </div>)
                }):filtered.map(flight=>{return(
                    <div>
                            <div>
                                <p>{flight.company}</p>
                                <p>{flight.duration}</p>
                                <p>{flight.price}</p>
                            </div>
                    </div>
                )
                })
            }
        </div>
    </div>
  )
}

export default SearchResult