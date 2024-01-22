import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import {  Link, useNavigate, useParams } from 'react-router-dom';



function Edit() {
  // hold input field data
  const [userid,setId]=useState("")
  const [username,setName]=useState("")
  const [useremail,setEmail]=useState("")
  const [useraddress,setAddress]=useState("")
  const [userphone,setPhone]=useState("")

  // get a particular id of user from the url

  const {id}=useParams()
  console.log(id);

  // get a particular details of user
  const base_url='http://localhost:8001'

  const fetchUser=async(id)=>{
    const result=await axios.get(`${base_url}/view-user/${id}`)
    console.log(result.data.users);
    setId(result.data.users.id)
    setName(result.data.users.name)
    setAddress(result.data.users.address)
    setEmail(result.data.users.email)
    setPhone(result.data.users.phone)
  }
  useEffect(()=>{
    fetchUser(id)
  },[])

  // update user fn:call
const location=useNavigate()
  const UpdateUser=async(e)=>{
    e.preventDefault()
    const body={
      id:userid,
      name:username,
      email:useremail,
      address:useraddress,
      phone:userphone
    }
    const result=await axios.post(`${base_url}/update-user/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/')
    
  }
  
  return (
    <div>
      <div className="container border shadow p-4 m-4 ms-5">
      <div className='d-flex p-3 ms-5'>
        <Link to={'/'}><i class="fa-solid fs-3 fa-xmark mt-3 me-5"></i></Link>
        <h3 className='my-3 mx-5 '>Edit contact</h3>
        <div className='mx-5'>
              <button onClick={(e)=>UpdateUser(e)} className='btn btn-success'>UPDATE</button>
        </div>
      </div>
      <div style={{marginLeft:'23%'}} className='mb-3 '>
          <img style={{width:'150px ',height:'150px'}}   alt='...' src='https://www.oaklands.ac.uk/wp-content/uploads/2021/08/pngitem_1468479.png' />
        </div>
        <form className='w-50  p-5 text-center ms-5'>
            <MDBInput onChange={(e)=>setId(e.target.value)} value={userid} label='id' id='formControlLg' type='text' size='lg' className='form-control ' />
            <br />
            <MDBInput onChange={(e)=>setName(e.target.value)} value={username} label='name' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setEmail(e.target.value)} value={useremail} label='email' id='formControlLg' type='email' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setAddress(e.target.value)} value={useraddress} label='address' id='formControlLg' type='text' size='lg' />
            <br />
            <MDBInput onChange={(e)=>setPhone(e.target.value)} value={userphone} label='phone number' id='formControlLg' type='text' size='lg' />
            <br />
            
        </form>
      </div>
    </div>
  )
}

export default Edit