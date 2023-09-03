import { NavLink, Outlet } from 'react-router-dom'

import React from 'react'

const MainHeader = () => {
  return (
    <>
    <main>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/start-training" >Start Training</NavLink>
                {/* future protected path when authentication is introduced later*/}
                <NavLink to="/my-locker-room" >My Locker Room</NavLink>
            </nav>
        </header>
        <Outlet/>
    </main>
    
    </>
  )
}

export default MainHeader

