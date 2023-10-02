import React from 'react'
import FlightCard from './FlightCard'

const SearchResult = ({oneway,filtered,from,to}) => {
    return (
    <div className='result-container'>
        <h2>{from +" > "+to}{oneway ? null : `${" > "+from}`}</h2>
        <div>
            {oneway?
                filtered.map(flight=><FlightCard flight={flight}/>):
                filtered.map(flight=>{return(
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