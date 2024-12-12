import React from 'react'

const Navbar = ({setLoggedIn,loggedIn}) => {
  return (
    <div>
      <ul>
        <a className='mx-5' href="">Home</a>
        <a href="">About</a>
        <button onClick={()=>setLoggedIn(!loggedIn)} className='bg-blue-400 px-5 py-2 rounded-lg text-white mx-5'>{loggedIn?'Logout':'Login'}</button>
      </ul>
    </div>
  )
}

export default Navbar
