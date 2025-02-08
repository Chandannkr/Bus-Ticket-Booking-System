import React, { useState } from 'react'
import '../../Styles/UserSignUp.css'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function UserSignUp() {
    let [user,setuser] = useState({
        username : "",
        email : "",
        password : "",
        phone : ""
    })

    let handleChange = (e) =>{
        let {name,value} = e.target;
        setuser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    console.log(user);

    function adduser(e){
        e.preventDefault()
      axios.post('http://localhost:1000/List_of_user',user)
        .then((res)=>{
            console.log(res);
            toast.success("user Regitered Success")
            
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Not Regiterd")
            
        })
      }
    
  return (
    <div className='usersginup'>
        <form action="">
            <label htmlFor="">Name : </label>
            <input type="text" value={user.username} name='username' 
            onChange={handleChange} placeholder='Enter the username' />
            <label htmlFor="">Email : </label>
            <input type="text" value={user.email} name='email' 
            onChange={handleChange} placeholder='Enter the Email' />
            <label htmlFor="">Phone : </label>
            <input type="text" value={user.phone} name="phone" 
            onChange={handleChange} placeholder='Enter the Phone' />
            <label htmlFor="">Password : </label>
            <input type="text" value={user.password} name="password" 
            onChange={handleChange} placeholder='Enter the Passsword' />
            <button onClick={adduser} className='btn fs-3 btn-info py-0 '>Register</button>
        </form>
    </div>
  )
}
