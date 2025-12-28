import React from 'react'
import { Link } from 'react-router-dom'
import { Logo , FormRow} from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
const Login = () => {
  return (
    <Wrapper>
      
      <form className='form'>
        <Logo/>
        <h1>Login</h1>
        <FormRow type ="email" name="email" labelText="email" defaultValue='shiva@123gmail.com'/>
        <FormRow type ="password" name="password" labelText="password" defaultValue='shiva@123'/>
        <button type='submit' className='btn btn-block'>Submit</button>
        <button type='button' className='btn btn-block'>
          Explore the app
        </button>
        <p>
          Not a member yet? 
          <Link to="/register">Register</Link>
        </p>
       </form>
      <Link to="/register">Register</Link>
    </Wrapper>
  )
}

export default Login
