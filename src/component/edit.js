import {React, useEffect, useState} from 'react'
import { Form , FormGroup, Label, Input,Button } from 'reactstrap'
import {useNavigate, useParams } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import toastr from "toastr";
import {getNoteByid, updateNote } from '../_helper/apiCall/noteService';

function Edit() {
  const[name,setName]=useState("")
  const[note,setNote]=useState("")
  const{id}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{
    Aos.init({duration:1000})
console.log(id);
    (async()=>{
      let res=await getNoteByid(id)
      setName(res?.data?.name)
      setNote(res?.data?.note)
    })()
      },
      [id])

      const onSubmit=async(e)=>{
      
        e.preventDefault();
        let obj={note:note}
        if( !name || !note){
          toastr.error("all fields required")
          return
        }
       let res= await updateNote(id,obj)

        if(res?.status==1){
          // setSession(res.data.token)
          navigate("/home")
          toastr.success(res.message)
          return
        }
        // setSession()
       toastr.error(res?.message)
      }

  return (
    <Form className='login-form' data-aos="zoom-in" >
    <h1 className='heading' data-aos="zoom-in">Update Note</h1>
    <FormGroup>
        <Label for='name' data-aos="fade-left">Title:</Label>
        <Input type='text' disabled value={name} onChange={(e)=>{setName(e.target.value)}}  name='name' placeholder='Enter Your Title' />
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

export default Edit;