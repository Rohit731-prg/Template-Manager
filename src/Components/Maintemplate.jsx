import React, { useContext, useState } from 'react'
import { contextAPI } from '../store/contextAPI'
import { useNavigate } from 'react-router-dom'
import mainBg from '../assets/main-bg.jpg'

function Maintemplate() {
  const { mainTemplate } = useContext(contextAPI);
  const navigate = useNavigate();
  const [hoverEffect, setHoverEffect] = useState(false);

  const style = {
    hover: {
      boxShadow: "0 0 10px #27c5f5",
      transition: "0.3s",
    },
  }

  return (
    <div 
    style={{backgroundImage: `url(${mainBg})`}}
    className='w-full h-screen p-10 bg-cover bg-center'>
      <div className='w-full h-auto flex justify-between'>
        <p className='text-5xl text-white'>Template</p>
        <button
            style={{ ...(hoverEffect && style.hover) }}
            onMouseEnter={() => setHoverEffect(true)}
            onMouseLeave={() => setHoverEffect(false)}
            className="sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm"
            onClick={() => navigate("/save-template")}
          >
            Back
          </button>
      </div>
      <div className='w-full h-auto mt-20 flex flex-row gap-5'>
        <div className='w-2/3'>
          <img 
          src={URL.createObjectURL(mainTemplate.file)} 
          alt=""
          className='rounded-xl' />
        </div>
        <div className='w-1/3 text-black font-semibold bg-white/30 backdrop-blur-lg rounded-xl p-5'>
          <p className='text-3xl'>Name</p>
          <p className='text-5xl mt-2'>{mainTemplate.name}</p>
          <p className='text-3xl mt-5'>Description</p>
          <p className='text-2xl mt-2'>{mainTemplate.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Maintemplate