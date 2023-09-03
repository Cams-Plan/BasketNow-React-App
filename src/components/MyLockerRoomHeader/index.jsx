import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MyLockerRoomHeader = () => {
  return (
    <>
    <header>
        <nav>
            <NavLink to="/my-locker-room" >Locker Room Home</NavLink>
            <NavLink to="/eoeeo">Training History</NavLink>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default MyLockerRoomHeader
