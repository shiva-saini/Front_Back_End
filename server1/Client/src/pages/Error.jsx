import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
const Error = () => {
  const error = useRouteError();
  if(error.status === 404){
    return (
      <Wrapper className='full-page'> 
      <div> 
        <img src={img} alt="not found" />
        <h3>Oops! Page Not Found</h3>
        <p>The page you are looking for does not exist.</p>
        <Link to="/dashboard">Back Home</Link>
      </div>
      </Wrapper>
        )
  }
  return (
    <div>
     <h1>Something went wrong</h1>
     <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Error
