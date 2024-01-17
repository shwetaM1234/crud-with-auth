import {React, useEffect, useState} from 'react'
import { Form , FormGroup, Label, Input,Button , CardText } from 'reactstrap'
import { Link, useNavigate } from "react-router-dom";
import Aos from 'aos'
import toastr from "toastr";
import "aos/dist/aos.css"
import { signIn } from '../_helper/apiCall/authService';
import { setSession } from '../_helper/apiConfig/api_auth';

function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    Aos.init({duration:1000})
      },
      [])

      const onSubmit=async(e)=>{
        e.preventDefault();
        let obj={email:email,password:password}
       
        if( !email || !password){
         toastr.error("all fields required")
        
          return
        }
       let res= await signIn(obj)
        if(res?.status==1){
          setSession(res.data.token)
          navigate("/home")
          toastr.success(res.message)
          return
        }
        setSession()
        toastr.error(res?.message)
        
        return
      }

  return (
    <Form className='login-form' data-aos="zoom-in" >
    <h1 className='heading' data-aos="zoom-in">Login Form</h1>
    <FormGroup>
        <Label for='email' data-aos="fade-left">Email:</Label>
        <Input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  name='email' placeholder='Enter Your Email' />
    </FormGroup>
    <FormGroup>
    <Label for='password' data-aos="fade-left">Password:</Label>
    <Input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} name='password' placeholder='Enter Your Password'/>
    </FormGroup>
    <FormGroup className='buttondiv' data-aos="fade-left">
 <Button  onClick={onSubmit} color="primary">Sign in</Button>

    </FormGroup>
<CardText className='bottom-text' data-aos="fade-left">Don't have an account? <Link to="/signup"> Registration here</Link></CardText>
    </Form>
  )
}

export default Login;