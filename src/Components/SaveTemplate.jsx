import React from "react";
import bg from "../assets/bg.jpg";
import { NavLink, useNavigate } from "react-router-dom";

function SaveTemplate() {
  return (
    <div className='w-full h-full'>
      <div 
      style={{backgroundImage: `url(${bg})`}}
      className='w-full h-screen bg-cover bg-center py-10 sm:px-20 px-5 text-white '>
          <div className='flex flex-row justify-between'>
              <p className='sm:text-3xl font-bold'>Template</p>
              <div className='flex flex-row sm:gap-10 gap-2 '>
                  <NavLink to={'/home'}>Home</NavLink>
                  <NavLink to={'/save-template'}>Templates</NavLink>
              </div>
              <button
              className='sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm'
              onClick={() => navigate('/')}
              >Log Out</button>
          </div>

          <div className="">

          </div>
        </div>
    </div>
  );
}

export default SaveTemplate;
