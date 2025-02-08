import React, { useEffect, useState } from 'react'
import admin from '../../Assets/admin.png'
import { Link } from 'react-router-dom'
import '../../Styles/AdminLogin.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {

 let data = useLocation();
  console.log(data);
  

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  console.log(username, password);

  let [users,setUsers] = useState([])

  useEffect(()=>{  
    axios.get('http://localhost:1000/List_of_Admins')
    .then((res)=>{
      console.log(res);
      setUsers(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  console.log(users);



  let navigate = useNavigate();
  

  let bool = false;
  function handleFun(e){
    e.preventDefault()
    users.map((user)=>{
      if(user.username === username && user.password === password){
        toast.success("Login Successfull")
        bool = true;
        navigate('/adminhomepage')
      }
    })
    if(bool === false){
      toast.error("Invalid User")
    }

  }
  
  
 


  return (
    <div className='AdminLogin'>
      <aside className='admin_sideImage'>
        <p>user : {data.state.name}</p>
        <p> password  : {data.state.password}</p>
        <img src={admin} alt="" />
      </aside>
      <aside className='admin_form'>
        <form action="">
          <label htmlFor="">Username : </label>
          <input required value={username} 
          onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Enter the username' />
          <label htmlFor="">Password : </label>
          <input required value={password} 
          onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Enter the password' />
          <button onClick={handleFun} className='btn btn-success' >Login</button>
          <span>Register as Admin <Link to='/adminsignup'>Sign up</Link></span>

        </form>
      </aside>
    </div>
  )
}
