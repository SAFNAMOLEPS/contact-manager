import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <div className="row" style={{backgroundColor:'black'}}>
            <div className="col-4"></div>
            <div className="col-4  text-center pt-5" >
            <h1 className='text-center' style={{
                fontSize:'150px', color:'whitesmoke'
            }}>404</h1>
            <div className="text mt-4 pb-5" >
            <h2 >Sorry <i class="fa-sharp fa-regular fa-face-frown-open fs-1"></i></h2>
            <h5>The Page You're Looking For <br /> Was Not Found</h5>
            <Link to={'/'}>
            <a style={{color:'whitesmoke'}} href="">Go back</a>
            </Link>
            </div>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}

export default PageNotFound