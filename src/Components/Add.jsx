import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Add() {
// hold input field data
  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")


  const base_url='http://localhost:8001/add-user'
  const location = useNavigate()

  const saveData=(e)=>{
    e.preventDefault()
    console.log(id,name,email,address,phone);
    //api call
    const body={
      id,name,email,address, phone
    }
    const result=axios.post(base_url,body).then((response)=>{
      console.log(result);
      alert(response.data.message)
      location('/')
      
    })
    .catch((error)=>{
      alert('Please enter unique id')
    })
    
  }

  return (
    <div>
      <div className="container m-4 ms-5 ps-5 border shadow p-3 pb-4">
        <div className='d-flex p-2'>
          <Link to={'/'}><i class="fa-solid fs-3 fa-xmark me-5"></i></Link>
          <h3 className='mx-5'>Create contact</h3>
          <div className=' mx-5 mb-2 '>
            <button onClick={(e)=>saveData(e)} className='btn text-success'>SAVE </button>
          </div>
        </div>
        <div style={{marginLeft:'18%'}} className='mb-3'>
          <img style={{width:'150px ',height:'150px'}}   alt='...' src='https://www.oaklands.ac.uk/wp-content/uploads/2021/08/pngitem_1468479.png' />
        </div>
        <form className='w-50  p-5'>
            <MDBInput onChange={(e)=>setId(e.target.value)} label='id' id='formControlLg' type='text' size='lg' className='form-control ' />
            <br />
            <MDBInput onChange={(e)=>setName(e.target.value)} label='name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setEmail(e.target.value)} label='email' id='formControlLg' type='email' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setAddress(e.target.value)} label='address' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setPhone(e.target.value)} label='phone number' id='formControlLg' type='text' size='lg' />
            <br />
            
        </form>
      </div>
    </div>
  )
}

export default Add