import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import Navbar from '../Components/Navbar';
import './Admin.css'
const Login = () => {

  const [email, setemail]= useState("");
  const [password, setpassword]= useState(""); 
  const dispatch= useDispatch();
   
  
  const handellogin= ()=>{
     const useData= {email, password} 
     dispatch(login(useData));

  }





  return (
    
    <>
    <Navbar heading="Login Page"/>
   <div marginX="10"
       style={{

      marginTop: '150px',
      width: '60%',
     margin: 'auto',
     padding: '40px',
     border: '1px solid black',


}} 
   
    > 
  <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='text' placeholder="Enter Email" 
    value={email}
    onChange={ (e)=>{setemail(e.target.value)}}
  />
  
  <FormLabel>Password</FormLabel>
  <Input type='passowrd' placeholder="Enter Password" 
    value={password}
   onChange={(e)=>{ setpassword(e.target.value)
   }}
  />
  
  <Button   margin="4" 
            paddingX="4"
            paddingY="4"  bg="blue.500" color="white"
            
            onClick={handellogin} >Login</Button>
</FormControl>
   </div>
   </>
  )
}

export default Login
