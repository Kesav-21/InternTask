import React,{useState} from 'react'
import FlightCard from './FlightCard'

const SearchResult = ({oneway,filtered,from,to,deptDate,retDate}) => {
    

    return (
    <div className='result-container'>
        <div className='result-head'>
            <h2>{(from=="" && to=="")?"From > To":`${oneway?`${from +" > "+to}`:`${from+" > "+to+" > "+from}`}`}</h2>
            <div className='header-date-info'>
                <p>Departure Date : {deptDate}</p>
                {!oneway && <p>Return Date : {retDate}</p>}
            </div>
        </div>
        <div>
            {oneway?
                filtered.map(flight=><FlightCard flight={flight} oneway={oneway} />):
                filtered.map(flight=><FlightCard flight={flight} oneway={oneway}/>)
                }
        </div>
    </div>
  )
}

export default SearchResult