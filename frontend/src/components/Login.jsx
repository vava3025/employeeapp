import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState({
        username:'',
        password:''
    })
    const navigate=useNavigate()   // used for redirecting to path using logic
    let updateUser=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }
    let sendData=()=>{                                            //check credentials
    
    axios.post('http://localhost:3000/user/login',user).then((res)=>{
      console.log(res)
      alert(res.data.message)
      if(res.data.usertoken){
        localStorage.setItem("token",res.data.usertoken);
        navigate('/home')
      }
    })
  }
  return (
    <>
      <div> <h2>Login</h2></div> <br/>
      {/* if we doesn't give value the input become read only */}
      <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={user.username} onChange={updateUser} />  <br/>
       <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={user.password} onChange={updateUser}/> <br/>
      <br/>
      <Button variant="contained" onClick={sendData}>Submit</Button>

    </>
  )
}

export default Login