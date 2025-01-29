import React, { useContext, useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { contextAPI } from "../store/contextAPI";

function SaveTemplate() {
  
  const { saveTemplateList, setSaveTemplateList, setFavList, setMainTemplate } = useContext(contextAPI);
  const navigate = useNavigate();

  // Function to delete a template
  const deleteTemplate = (id) => {
    const updatedList = saveTemplateList.filter((item) => item.id !== id);
    setSaveTemplateList(updatedList);

    // Also update the favorites list
    setFavList((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to toggle favorite status
  const favListAdd = (id) => {
    setSaveTemplateList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, fav: !item.fav } : item
      )
    );
  };

  // Update the favorite list whenever saveTemplateList changes
  useEffect(() => {
    const updatedFavList = saveTemplateList.filter((item) => item.fav);
    setFavList(updatedFavList);
  }, [saveTemplateList]);

  const detalsPage = (item) => {
    setMainTemplate(item);
    navigate('/maintemplate')
  }
  return (
    <div className="w-full h-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full h-full bg-cover bg-center py-10 sm:px-20 px-5 text-white"
      >
        {/* Header Section */}
        <div className="flex flex-row justify-between">
          <p className="sm:text-3xl font-bold">Template</p>
          <div className="flex flex-row sm:gap-10 gap-2">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/save-template"}>Templates</NavLink>
            <NavLink to={"/fav-template-list"}>Favourites</NavLink>
          </div>
          <button
            className="sm:px-5 sm:py-3 bg-black hover:buttonShadow text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>
        <div className="w-full h-auto py-5 flex justify-center">
          <div className="bg-white w-1/3 flex flex-row justify-between rounded-2xl">
            <input 
            placeholder="Search Templates"
            className="w-3/4 h-10 border-none outline-none px-3 text-black"
            type="text" />
            <button
            className="w-1/4 bg-cyan-300 rounded-2xl cursor-pointer"
            >🔍</button>
          </div>
        </div>
        <div>
          <p className="mt-10 text-2xl">Last Updated Templates</p>
          <div className="flex flex-row gap-5 mt-5 flex-wrap">
            {saveTemplateList.map((item) => (
              <div key={item.id} className="w-[400px] h-[300px] relative">
                <img
                  src={URL.createObjectURL(item.file)}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
                <button
                  style={{ boxShadow: "0 0 4px black" }}
                  className="absolute top-2 right-2 text-2xl bg-white rounded-full h-[50px] w-[50px]"
                  onClick={() => favListAdd(item.id)}
                >
                  {item.fav ? "❤️" : "🤍"}
                </button>
                <div className="absolute bottom-0 left-0 px-5 py-4 w-full bg-black/40 backdrop-blur-md rounded-t-lg rounded-xl">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-white text-sm mt-1">{item.description}</p>
                  <div className="w-full flex flex-row gap-5">
                    <button
                    className="px-5 py-1 bg-green-500/80 hover:bg-green-600 text-white rounded-md text-base font-semibold cursor-pointer mt-3"
                    onClick={() => detalsPage(item)}
                    >
                      details
                    </button>
                    <button
                      className="px-5 py-1 bg-red-500/80 hover:bg-red-600 text-white rounded-md text-base font-semibold cursor-pointer mt-3"
                      onClick={() => deleteTemplate(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveTemplate;
