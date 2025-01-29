import React, { useContext, useState } from "react";
import { contextAPI } from "../store/contextAPI";
import bg from "../assets/bg.jpg";
import { NavLink } from "react-router-dom";

function FavTemplateList() {
  const { favList, setFavList } = useContext(contextAPI);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full h-full p-10 text-white bg-cover bg-center"
    >
      <div className="flex flex-row justify-between">
        <p className="sm:text-3xl font-bold">Template</p>
        <div className="flex flex-row sm:gap-10 gap-2">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/save-template"}>Templates</NavLink>
          <NavLink to={"/fav-template-list"}>Favourites</NavLink>
        </div>
        <button
          className="sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm"
          onClick={() => navigate("/")}
        >
          Log Out
        </button>
      </div>
      <div>
        <p className="mt-10 text-2xl">Favorite Templates</p>
        <div className="flex flex-row gap-5 mt-5 flex-wrap">
          {favList.map((item) => (
            <div key={item.id} className="w-[500px] h-[300px] relative">
              <img
                src={URL.createObjectURL(item.file)}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 px-5 py-4 w-full bg-black/40 backdrop-blur-md rounded-t-lg">
                <p className="text-white text-lg font-semibold">{item.name}</p>
                <p className="text-white text-sm mt-1">{item.description}</p>
                <button
                  className="px-5 py-1 bg-red-500/80 hover:bg-red-600 text-white rounded-md text-base font-semibold cursor-pointer mt-3"
                  onClick={() => deleteTemplate(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavTemplateList;
