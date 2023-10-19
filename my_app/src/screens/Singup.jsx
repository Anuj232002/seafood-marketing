import React from 'react'
import { useState } from 'react';
import { Avatar, Grid,Paper,Typography,Button} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { TextField } from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
export default function Singup() {
  let navigate=useNavigate()
  //use Usestate event with the help of crediantial we setcrediantial without reloading page
  const paperStyle={padding:20,height:"inherit",margin:"20px auto",width:280,marginTop:"5rem"}
  const [crediantial, setcrediantial] = useState({name:"",email:"",password:"",geolocation:""})

  //use in thuder client
  //Using fetch api preventDefault is synthetic event
  const handleSubmit=async(e,res)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:crediantial.name,email:crediantial.email,password:crediantial.password,location:crediantial.geolocation})

    });
    const json=await response.json()
    console.log(json)
    if(!json.success){
      alert("Enter valid credential");
    }
    navigate("/login")
  }
  //we use onCjange event listener without the we can't type anything in textfield as we pass an emapty string in stringyfy
  const onChange=(event)=>{
    setcrediantial({...crediantial,[event.target.name]:event.target.value})

  }
  return (
    <>
    <form onSubmit={handleSubmit} >
    
    <Grid>
      <Paper elevation={5} style={paperStyle}>
      <Grid align="center">
      <Avatar sx={{backgroundColor:"#00204a"}}><LoginIcon /></Avatar>
      <Typography variant="h5">Sign up</Typography>
      </Grid>
      <TextField type="text" label="Name" variant='standard' name='name' value={crediantial.name} fullWidth required sx={{marginTop:"20px",marginBottom:"20px"}} onChange={onChange}/>
      <TextField type="email" label="Email" variant='standard' name='email' value={crediantial.email} fullWidth required sx={{marginBottom:"20px"}} onChange={onChange}/>
      <TextField type="password" label="Password" variant='standard' name='password' value={crediantial.password} fullWidth required sx={{marginBottom:"20px"}} onChange={onChange}/>
      <TextField type="text" label="Address" variant='standard' name='geolocation' value={crediantial.geolocation} fullWidth required sx={{marginBottom:"20px"}} onChange={onChange}/>
      <Button type="submit" variant='contained' fullWidth sx={{marginBottom:"20px"}}>Sign up</Button>
      <Typography component={Link} to='/login' variant="subtitle2" sx={{textDecoration:'none'}}>Already a user?</Typography>
      </Paper>
    </Grid>
    </form>
    </>
  )
}
