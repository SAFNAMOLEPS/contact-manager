import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar  style={{ backgroundColor:'skyblue' }} className='ps-5'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-white '>
          <i class="fa-regular fa-address-book fa-beat fs-2 m-3"></i>
            Contact Manager
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header