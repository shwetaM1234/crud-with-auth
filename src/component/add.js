import {React, useEffect, useState} from 'react'
import { Form , FormGroup, Label, Input,Button } from 'reactstrap'
import {useNavigate } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import toastr from "toastr";
import { createNote } from '../_helper/apiCall/noteService';

function Add() {
  const[name,setName]=useState("")
  const[note,setNote]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
    Aos.init({duration:1000})
      },
      [])

      const onSubmit=async(e)=>{
      
        e.preventDefault();
        let obj={name:name,note:note}
        if( !name || !note){
         toastr.error("all fields required")
          return
        }
       let res= await createNote(obj)
        if(res?.status==1){
          // setSession(res.data.token)
          navigate("/home")
          toastr.success(res.message)
          return
        }
        // setSession()
       toastr.success(res?.message)
        return
      }

  return (
    <Form className='login-form' data-aos="zoom-in" >
    <h1 className='heading' data-aos="zoom-in">Add Note</h1>
    <FormGroup>
        <Label for='name' data-aos="fade-left">Title:</Label>
        <Input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}  name='name' placeholder='Enter Your Title' />
    </FormGroup>
    <FormGroup>
    <Label for='note' data-aos="fade-left">Note:</Label>
    <Input type='textarea' value={note} onChange={(e)=>{setNote(e.target.value)}}  name='note' placeholder='Enter Your Note'/>
    </FormGroup>
    <FormGroup className='buttondiv' data-aos="fade-left">
   <Button onClick={onSubmit} color="primary">Submit</Button>

    </FormGroup>
   </Form>
  )
}

export default Add;