import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   return (
      <div>
         <div className='p-3 md:py-7 flex items-center justify-between bg-blue-500 text-white md:justify-center md:space-x-10'>
            <Link to="/">All records</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/newuser">Create</Link>
         </div>
      </div>
   )
}
