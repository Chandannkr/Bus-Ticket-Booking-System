import React, { useState } from 'react'
import '../../Styles/AddBus.css'
import axios from 'axios';
import { toast } from 'react-toastify';
export default function AddBus() {

    let [bus, setBus] = useState({
        Bus_name: ""
        , number: ""
        , from: ""
        , to: ""
        , arrival: ""
        , departure: ""
        , no_of_seats: ""
        , description: "",
        thumbnail: ""
    })

    function addBus(e) {
        let {name,value} = e.target;

        setBus((PrevValue) =>
        ({
            ...PrevValue,
            [name]: value
        })
        )
    }
    let payload = bus;

    function SubmitBusInfo(e) {
        e.preventDefault();
        axios.post('http://localhost:1000/Bus_List', payload)
            .then((res) => {
                console.log(res);
                toast.success("Added the bus details Succefully")
            })
            .catch((res) => {
                console.log(res);
                toast.error("Invalid Bus")
            })

    }

    return (
        <div className='AddBus'>
            <form onSubmit={SubmitBusInfo} action="">
                <label htmlFor="">
                    Bus Thumbnail :
                </label>
                <input required
                    value={bus.thumbnail}
                    onChange={addBus}
                    name='thumbnail'
                    type="text"
                    placeholder='Enter the bus thumbnail' />
                <label htmlFor="">
                    Bus Name :
                </label>
                <input required
                    value={bus.Bus_name}
                    onChange={addBus}
                    name='Bus_name'
                    type="text"
                    placeholder='Enter the bus name' />
                <label htmlFor="">
                    Bus Number :
                </label>
                <input required
                    value={bus.number}
                    onChange={addBus}
                    name='number'
                    type="text"
                    placeholder='Enter the bus number' />
                <label htmlFor="">
                    From :
                </label>
                <input required
                    value={bus.from}
                    onChange={addBus}
                    name='from'
                    type="text"
                    placeholder='Enter the bus from' />
                <label htmlFor="">
                    To :
                </label>
                <input required
                    value={bus.to}
                    onChange={addBus}
                    name='to'
                    type="text"
                    placeholder='Enter the bus to' />
                <label htmlFor="">
                    Departure :
                </label>
                <input required
                    value={bus.departure}
                    onChange={addBus}
                    name='departure'
                    type="time"
                    placeholder='Enter the bus departure' />
                    <label htmlFor="">
                    Arrival :
                </label>
                <input required
                    value={bus.arrival}
                    onChange={addBus}
                    name='arrival'
                    type="time"
                    placeholder='Enter the bus arrival' />
                <label htmlFor="">
                    No of Seats :
                </label>
                <input required
                    value={bus.no_of_seats}
                    onChange={addBus}
                    name='no_of_seats'
                    type="number"
                    placeholder='Enter the no_of_seats' />
                <label htmlFor="">
                    No of Seats :
                </label>
                <textarea
                    required
                    value={bus.description}
                    onChange={addBus}
                    name='description'
                    type="number"
                    placeholder='Enter the description' ></textarea>
                <button className='btn btn-danger'>Add bus</button>
            </form>
        </div>
    )
}
