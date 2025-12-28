import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo , FormRow} from '../components'

const Register = () => {
  return (
    <Wrapper>
     <form className='form'>
      <Logo/>
      <h1>Register</h1>
      <FormRow type ="text" name="name" labelText="Name" defaultValue='shiva'/>
      <FormRow type ="text" name="lastname" labelText="last name" defaultValue='saini'/>
      <FormRow type ="text" name="location" labelText="Location" defaultValue='earth'/>
      <FormRow type ="email" name="email" labelText="email" defaultValue='shiva@123gamil.com'/>
      <FormRow type ="password" name="password" labelText="password" defaultValue='shiva@123'/>
      <button type='submit' className='btn btn-block'>Submit</button>
      <p>
        Already a member? <Link to="/login">Login</Link>
      </p>
      </form>
    </Wrapper>
  )
}

export default Register
