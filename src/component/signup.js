import {React, useEffect, useState} from 'react'
import { Form , FormGroup, Label, Input,Button , CardText } from 'reactstrap'
import { Link, useNavigate } from "react-router-dom";
import toastr from "toastr";
import Aos from 'aos'
import "aos/dist/aos.css"
import { usersignUp } from '../_helper/apiCall/authService';

function Signup() {
    
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    Aos.init({duration:1000})
      },
      [])

      const onSubmit=async(e)=>{
       
        e.preventDefault();
        let obj={name:name,email:email,password:password}
        if(!name || !email || !password){
          toastr.error("all fields required")
          return
        }
        let res=await usersignUp(obj)
        if(res && res.status==1){
        navigate("/login")
        toastr.clear()
        toastr.success(res.message)
      }
        else{
          toastr.clear()
       toastr.success(res?.message)
        }
      }

  return (
    <Form className='signup-form' data-aos="zoom-in" >
    <h1 className='heading' data-aos="zoom-in">Signup Form</h1>
    <FormGroup>
        <Label for='name' data-aos="fade-left">Name:</Label>
        <Input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name='name' placeholder='Enter Your Name' />
    </FormGroup>
    <FormGroup>
        <Label for='email' data-aos="fade-left">Email:</Label>
        <Input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  name='email' placeholder='Enter Your Email' />
    </FormGroup>
    <FormGroup>
    <Label for='password' data-aos="fade-left">Password:</Label>
    <Input type='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}}  name='password' placeholder='Enter Your Password' />
    </FormGroup>
    {/* <FormGroup>
    <Label for='password' data-aos="fade-left">Confirm Password:</Label>
    <Input type='password' name='password' placeholder='Confirm Your Password' />
    </FormGroup> */}
    <FormGroup className='buttondiv'>
    <Button onClick={onSubmit} color="primary">Sign up</Button>

    </FormGroup>
<CardText className='bottom-text'>You have an account? <Link to="/"> Login here</Link></CardText>
    </Form>
  )
}

export default Signup;