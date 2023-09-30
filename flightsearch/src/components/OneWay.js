import React, { useState } from 'react'

const OneWay = () => {
    const passengers=[1,2,3,4,5,6,7,8,9]
    const [formData,SetFormData]=useState({})
    const [from,setFrom]=useState("")
    const [to,setTo]=useState("")
    const [deptDate,setDeptDate]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
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
                <input type='date' value={deptDate} onChange={handleDeptDateInput}/>
            </div>
            <div>
                <label>Passengers:</label>
                <select id="passengers">
                    {/* {passengers.map(num=>{
                        <option value={`${num}`}>{value}</option>
                    })} */}
                </select>
            </div>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default OneWay