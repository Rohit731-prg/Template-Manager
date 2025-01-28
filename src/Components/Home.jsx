import React, { useContext, useState } from 'react'
import bg from '../assets/bg.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { contextAPI } from '../store/contextAPI';

function Home() {
    const navigate = useNavigate();
    const { UserData, saveTemplateList, setSaveTemplateList } = useContext(contextAPI);
    const [templateName, setTemplateName] = useState('');
    const [des, setDes] = useState('');
    const [id, setId] = useState(0);
    const [file, setFile] = useState(null);
    const [hoverEffect, setHoverEffect] = useState(false);

    const uploadTemplate = () => {
        const newTemplate = {
            id: id,
            name: templateName,
            description: des,
            fav: false,
            file : file
        }
        setSaveTemplateList([...saveTemplateList, newTemplate]);
        setId(id + 1);
        setDes('');
        setTemplateName('');
        setFile(null);
    }

    const style = {
        hover: {
          boxShadow: '0 0 10px #27c5f5',
          transition: '0.3s'
        }
      }
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
                    <NavLink to={'/fav-template-list'}>Favorites</NavLink>
                </div>
                <div className='flex flex-row gap-5'>
                    <button
                    style={{ ...(hoverEffect && style.hover) }}
                    onMouseEnter={() => setHoverEffect(true)}
                    onMouseLeave={() => setHoverEffect(false)}
                    className='sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm'
                    onClick={() => navigate('/')}
                    >Setting</button>
                    <button
                    style={{ ...(hoverEffect && style.hover) }}
                    onMouseEnter={() => setHoverEffect(true)}
                    onMouseLeave={() => setHoverEffect(false)}
                    className='sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm'
                    onClick={() => navigate('/')}
                    >Log Out</button>
                </div>
            </div>
            <p className='mt-10 text-2xl sm:text-3xl sm:font-semibold'>Welcome {UserData.userName}</p>
            <div className='mt-10 px-5 flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold py-10 sm:text-4xl'>Upload Your Template</p>
                <input
                onChange={(e) => setFile(e.target.files[0])}
                className='bg-black text-white px-5 py-3 rounded-lg font-semibold' 
                type="file" />
                <div className='w-auto sm:w-1/3 h-auto mt-5'>
                    <p className='mb-[2px]'>Name of Template</p>
                    <input 
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    placeholder='Enter Name'
                    className='bg-black text-white px-5 py-3 rounded-lg font-semibold sm:w-full'
                    type="text" />
                </div>
                <div className='w-auto sm:w-1/3 h-auto mt-5'>
                    <p className='mb-[2px]'>Description</p>
                    <textarea 
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    placeholder='Enter Des...'
                    className='bg-black text-white px-5 py-3 rounded-lg font-semibold sm:h-40 sm:w-full w-full'
                    type="text" />
                </div>
                <button
                onClick={uploadTemplate}
                className='mt-10 w-auto px-10 text-white rounded-lg bg-black cursor-pointer py-3 hover:shadow-2xl hover:shadow-cyan-200'>
                    Upload
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home