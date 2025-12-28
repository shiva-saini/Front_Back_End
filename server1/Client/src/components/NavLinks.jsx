import React from 'react'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import { useDashboardContext } from '../pages/DashboardLayout'
const NavLinks = ({isBigSidebar}) => {
  const { toggleSidebar } = useDashboardContext();
  return (
      <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  onClick={isBigSidebar ? null : toggleSidebar}
                  to={path}
                  key={text}
                  className="nav-link"
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
  )
}

export default NavLinks
