import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';



function Admin() {
  
  const base_url='http://localhost:8001'
  const [allusers,setAllusers]=useState([])

    const fetchData=async()=>{
    const result=await axios.get(`${base_url}/get-all-users`)
    console.log(result.data.users);
    setAllusers(result.data.users)
  }
  console.log(allusers);

  const deleteUser=async(id)=>{
    const result= await axios.delete(`${base_url}/delete-user/${id}`)
    console.log(result);
    alert(result.data.message)
    
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
        
            <div className="row">
                <div className="col-4 "></div>
                <div className="col-4 mt-5  d-flex  ">
                    <input type="text" placeholder='search here....' className='form-control rounded' />
                    <i style={{marginLeft:'-40px'}} className='fs-3 mt-3  fa-solid fa-magnifying-glass'></i>
                </div>
                <div className="col-4"></div>
            </div>
            
            <div className="list p-5 mb-3">
            
                <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center d-flex ps-5 m-2">
                    <Link to={'/add'}>
                    <i  class="fa-solid fa-user-plus fa-fade fs-3 mx-1 "></i>
                    </Link>
                    <h4 className='text-center mb-5 ps-2'>Create new contact</h4>
                </div>
                <div className="col-4"></div>
            </div>
            <MDBTable align='middle'>
      <MDBTableHead >
        {
          allusers.map((item)=>(
            <tr>
              
          <th scope='col'><i class="fa-solid fa-circle-user mx-5 "></i>{item.name} </th>
          <th scope='col'>{item.email}</th>
          <th scope='col'><Link to={`view/${item.id}`}><i class="fa-solid fa-eye mx-5 text-info "></i></Link>
          <Link to={`edit/${item.id}`}><i class="fa-solid fa-pen me-5 text-success "></i></Link>
          <i onClick={()=>deleteUser(item.id)} class="fa-solid fa-trash text-danger"></i></th>
        </tr>
          ))
        }
      </MDBTableHead>
      
    </MDBTable>
            </div>
        
        
    </div>
  )
}

export default Admin