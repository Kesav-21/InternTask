import React, { useState } from 'react'
import OneWay from './OneWay'
import RoundTrip from './RoundTrip'


const SearchFlight = ({flights}) => {
    const [oneWayTrip,setOneWayTrip]=useState(true)
  return (
    <div>
        <h2>SearchFlight</h2>
        <div>
            <h4>One way</h4>
            <h4>Two way</h4>
        </div>
        {oneWayTrip?<OneWay flights={flights}/>:<RoundTrip/>}
    </div>
  )
}

export default SearchFlight