import { Button, Card, CardContent, Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosinterceptor'
const Home = () => {
   const [employee,setEmploye]=useState([])

   useEffect(()=>{
    axiosInstance.get('http://localhost:3000/employe/').then((res)=>{
      setEmploye(res.data);
    })
  },[])
      let deleteEmploye=(p)=>{
        axiosInstance.delete('http://localhost:3000/employe/delete/'+p).then((res)=>{
          alert('deleted');
          window.location.reload();
        })
      }
     const navigate=useNavigate() // add a function for update using navigate
     function updateEmploye(employe){
      navigate('/add',{state:{employe}})
     }


      // const user=localStorage.getItem('username'); 
   

  return (
    
    <div style={{ padding: '20px', marginTop:'6%'}}> 
    <h5>WELCOME </h5>
     <Grid2 container spacing={1} >
      {employee.map((item) => (
        <Grid2 item xs={12} sm={6} md={4} lg={3} key={item.courseId}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%',width:'300px' }}>
            <CardContent sx={{flex: '1 0 auto'}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.employeName}
              </Typography>
              <Typography variant="body2">
                <strong>Designation:</strong> {item.employeDesignation}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Salary:</strong> {item.employeSalary}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Department:</strong> {item.employeDepartment}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Location:</strong> {item.employeLocation}
              </Typography>
              <Typography><br />
                {/* <Button sx={{backgroundColor:'blue',color:'white'}}>Read More</Button> */}
                <Button sx={{backgroundColor:'red',color:'white'}} onClick={()=>{deleteEmploye(item._id)}}>Delete</Button>
                <Button sx={{backgroundColor:'green',color:'white'}} onClick={()=>{updateEmploye(item)}} >Update</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
 

  </div>
  )
}

export default Home