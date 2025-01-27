import React, { useContext, useEffect, useState } from 'react';
import { contextAPI } from '../store/contextAPI';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { mode, setMode, UserData } = useContext(contextAPI);
  const [imgCount, setImgCount] = useState(1);
  const [fade, setFade] = useState(false); // Animation state
  const navigate = useNavigate();
  const ImageList = {
    1: 'https://images.unsplash.com/photo-1631943406801-ba6ccfa4f682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
    2: 'https://images.unsplash.com/photo-1616731948638-b0d0befef759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
    3: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww',
  };

  const chectUser = () => {
    if (userName === UserData.userName && password === UserData.password) {
      navigate('/home');
    } else {
      alert('Invalid User');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setImgCount((prevCount) => (prevCount === 3 ? 1 : prevCount + 1));
        setFade(false); // Trigger fade-in
      }, 500); // Delay to sync with the fade-out animation
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className={`${mode ? 'bg-black' : 'bg-white'} w-full h-full flex flex-col justify-center items-center`}>
      {/* Header */}
      <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center px-5 py-3 mb-8 sm:mb-16">
        <p className={`${mode ? 'text-white' : 'text-black'} text-2xl font-medium sm:text-3xl lg:text-4xl text-center sm:text-left`}>
          Personal Template Management
        </p>
        <button
          onClick={() => setMode(!mode)}
          className={`${mode ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-2 font-medium rounded-md cursor-pointer border-none outline-none mt-3 sm:mt-0`}
        >
          {mode ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Main Content */}
      <div className={`w-11/12 sm:w-3/4 h-full ${mode ? 'bg-[#3b3b3b]' : 'bg-[#dee0df]'} rounded-2xl p-5 flex flex-col sm:flex-row gap-10`}>
        {/* Left Image Section */}
        <div className="w-full sm:w-1/2 h-full sm:h-full px-5 sm:px-10 relative">
          <img
            src={ImageList[imgCount]}
            className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
            alt="background"
          />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-row gap-3">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setImgCount(num)}
                className={`w-4 h-4 rounded-full ${imgCount === num ? 'bg-black' : 'bg-white'} hover:bg-black`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full sm:w-1/2 h-auto flex flex-col px-5 sm:px-10 py-5 sm:py-10">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-10 sm:mb-20">
            Enter Details to <br /> Log In
          </p>
          <p className="text-lg sm:text-xl mb-1">Enter Name</p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Full Name"
            className="border-2 border-cyan-300 outline-none px-5 py-3 rounded-lg mb-5 w-full"
            type="text"
          />
          <p className="text-lg sm:text-xl mb-1">Enter Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border-2 border-cyan-300 outline-none px-5 py-3 rounded-lg mb-5 w-full"
            type="password"
          />
          <button
            onClick={chectUser}
            className="w-full h-auto text-white text-xl sm:text-2xl font-medium bg-cyan-500 mt-5 py-3 rounded-lg cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
