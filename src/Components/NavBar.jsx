import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="flex justify-between bg-blue-500 px-8">
      <Link to="/">Add Note</Link>
      <Link  to="/notes">Notes</Link>
      <Link to="/edit-note">Edit Notes</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar
