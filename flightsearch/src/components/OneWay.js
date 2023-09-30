import React, { useState } from 'react'
import SearchResult from './SearchResult'

const OneWay = ({flights}) => {
    const passengers=[1,2,3,4,5,6,7,8,9]
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [deptDate,setDeptDate]=useState("")
    const [selected,setSelected]=useState(passengers[0])

    const [filtered,setFiltered]=useState([])


    const handleSubmit=(e)=>{
        e.preventDefault()
        const res=flights.filter(flight=>flight.from==from && flight.to==to)
        console.log(res)
        setFiltered(res)
    }

    const handleFromInput=(e)=>{
        setFrom(e.target.value)
    }
    const handleToInput=(e)=>{
        setTo(e.target.value)
    }
    const handleDateInput=(e)=>{
        setDeptDate(e.target.value)
    }
    const handlePassengerInput=(e)=>{
        setSelected(e.target.value)
    }

  return (
    <div>
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
                <label>Date:</label>
                <input type='date' value={deptDate} onChange={handleDateInput}/>
            </div>
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
        <SearchResult filtered={filtered}/>
    </div>
  )
}

export default OneWay