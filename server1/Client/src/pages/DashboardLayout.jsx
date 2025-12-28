import React, { use } from 'react'
import { Outlet } from 'react-router-dom'
import {BigSidebar, SmallSidebar, Navbar} from '../components/index.js'
import Wrapper from '../assets/wrappers/Dashboard.js'
import { createContext,useState,useContext } from 'react';
const DashboardContext = createContext();
import { checkDefaultTheme } from '../App.jsx';

const DashboardLayout = ({isDarkThemeEnabled}) => {
  const [user,setUser] = useState({name:'Shiva Saini'});
  const [showSidebar,setShowSidebar] = useState(false); 
  const [isDarkTheme,setIsDarkTheme] = useState(checkDefaultTheme());  
  
  const logoutUser = () => {
    setUser(null);
  }
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('isDarkTheme', newDarkTheme);
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleSidebar,toggleDarkTheme}}>
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar/>
          <div className='dashboard-page'>
            <Outlet /> 
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout
