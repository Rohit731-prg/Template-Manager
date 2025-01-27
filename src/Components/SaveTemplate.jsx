import React from 'react'
import bg from '../assets/bg.jpg'
import { NavLink, useNavigate } from 'react-router-dom'

function SaveTemplate() {
  return (
    <div>
        <div 
        style={{backgroundImage: `url(${bg})`}}
        className='w-full h-screen bg-cover bg-center py-5 px-20 flex flex-row justify-between'>
            <p>Template</p>
            <div>
                <NavLink to={'/home'}>Home</NavLink>
                <NavLink to={'/save-template'}>Templates</NavLink>
            </div>
            <button
            onClick={() => navigate('/')}
            >Log Out</button>
        </div>
    </div>
  )
}

export default SaveTemplate