import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

function View() {

  const base_url='http://localhost:8001'
  // get an id from url
  const {id}=useParams()
  console.log(id);

  const[userData,setUserData]=useState({})
  // api fetching - fn:
const fetchUser=async(id)=>{
  const result=await axios.get(`${base_url}/view-user/${id}`)
  console.log(result.data.users);
  setUserData(result.data.users)
}
console.log(userData);
useEffect(()=>{
  fetchUser(id)
},[])

  return (
    <div>
        <div className="container w-50 p-5 ">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
          {
            <MDBCard className=' shadow-lg p-4 ' style={{backgroundColor:'thistle'}}>
            <MDBCardImage style={{width:'200px ',height:'180px',marginLeft:'25%'}} className=' mt-3' alt='...' src='https://webstockreview.net/images/human-clipart-human-symbol-19.png' />
            <MDBCardBody>
              <MDBCardTitle className='text-center text-info'><b>{userData.name}</b></MDBCardTitle>
              <MDBListGroupItem className='text-center text-info'><b>Id : {userData.id}</b></MDBListGroupItem>
            </MDBCardBody>
            <MDBListGroup flush className='p-3'>
              <h5><b>Contact Info</b></h5>
              <MDBListGroupItem ><b>Address :</b><h6 className='text-dark'>{userData.address}</h6> </MDBListGroupItem>
              <MDBListGroupItem><b>Email : </b><h6 className='text-dark'>{userData.email}</h6></MDBListGroupItem>
              <MDBListGroupItem><b>Phone no :</b> <h6 className='text-dark'>{userData.phone}</h6></MDBListGroupItem>
              
            </MDBListGroup>
  
          </MDBCard>
          }
        <div className='text-center mt-5'>
          <Link to={'/'}>
          <button className='btn btn-success'>back to home</button>
          </Link>
        </div>
          </div>
          <div className="col-1"></div>
        </div>
        </div>
    </div>
  )
}

export default View