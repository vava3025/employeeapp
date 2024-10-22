import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Add = () => {
   const [employe, setEmploye]=useState({
      employeId:'',
      employeName:'',
      employeDesignation:'',
      employeSalary:'',
      employeDepartment:'',
      employeLocation:''
   });
      const navigate=useNavigate()

       const fetchValue=(e)=>{
           setEmploye({...employe, [e.target.name]: e.target.value});
       };
       const location=useLocation()
    const sendData=()=>{
      //  console.log(course);
      if (location.state!=null){
        axiosInstance.put('http://localhost:3000/employe/edit/'+location.state.employe._id,employe).then((res)=>{
          alert('Data upadted');
          navigate('/home')
        }).catch((error)=>{
          console.log(error);
        })

        }
         else{
          axiosInstance.post('http://localhost:3000/employe/addemploye',employe).then((res)=>{
            navigate('/home')
          }).catch((error)=>{
            console.log(error)
          })
         }
         
      };
   useEffect(()=>{
    if (location.state!=null){
      setEmploye({...employe,
        employeId:location.state.employe.employeId,
        employeName:location.state.employe.employeName,
        employeDesignation:location.state.employe.employeDesignation,
        employeSalary:location.state.employe.employeSalary,
        employeDepartment:location.state.employe.employeDepartment,
        employeLocation:location.state.employe.employeLocation,
      })
    }
   },[])
   
  return (
    <div>
      <h2 style={{ paddingTop: "50px" }}>New Employees</h2>
      <Box 
        component="form"
        sx={{ '& > :not(style)': { m: 1,width: '25ch' } }} 
        noValidate
        autoComplete="off"
        >
     <TextField id="standard-basic" label="employeId" variant="outlined" name="employeId" value={employe.employeId} onChange={fetchValue}/><br />
     <TextField id="standard-basic" label="employeName" variant="outlined" name="employeName"  value={employe.employeName} onChange={fetchValue}/><br />
     <TextField id="standard-basic" label="employeDesignation" variant="outlined" name="employeDesignation"  value={employe.employeDesignation} onChange={fetchValue} /><br />
     <TextField id="standard-basic" label="employeSalary" variant="outlined" name="employeSalary"  value={employe.employeSalary} onChange={fetchValue} /><br />
     <TextField id="standard-basic" label="employeDepartment" variant="outlined" name="employeDepartment"  value={employe.employeDepartment} onChange={fetchValue} /><br />
     <TextField id="standard-basic" label="employeLocation" variant="outlined" name="employeLocation"  value={employe.employeLocation} onChange={fetchValue}/><br /><br />
     <Button variant="contained" onClick={sendData}>submit</Button><br />
    </Box>
    </div>

  )
}

export default Add