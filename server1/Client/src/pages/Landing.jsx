import React from 'react'
import Styled from 'styled-components'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
    <nav>
      <Logo/>
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          Job <span>Tracking</span> App
        </h1>
        <p>
          I'm baby four loko shoreditch, migas vaporware banh mi crucifix
          lumbersexual. Poke tbh shaman, glossier adaptogen hot chicken prism         
        </p>
        <Link to="/register" className='btn register-btn'>
          Register
        </Link>
        <Link to="/login" className='btn'>
          Login/Demo user
        </Link>
      </div>
      <img src={main} alt="job hunt" className='img main-img'/>
    </div>
    </Wrapper>
  )
}



export default Landing
