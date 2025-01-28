import React, { useContext, useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { contextAPI } from "../store/contextAPI";

function SaveTemplate() {
  
  const { saveTemplateList, setSaveTemplateList, favList, setFavList } = useContext(contextAPI);
  const navigate = useNavigate();
  const [hoverEffect, setHoverEffect] = useState(false);

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

  const style = {
    hover: {
      boxShadow: '0 0 10px #27c5f5',
      transition: '0.3s'
    }
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
          </div>
          <button
            style={{ ...(hoverEffect && style.hover) }}
            onMouseEnter={() => setHoverEffect(true)}
            onMouseLeave={() => setHoverEffect(false)}
            className="sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>

        {/* Last Updated Templates Section */}
        <div>
          <p className="mt-10 text-2xl">Last Updated Templates</p>
          <div className="flex flex-row gap-5 mt-5 flex-wrap">
            {saveTemplateList.map((item) => (
              <div key={item.id} className="w-[500px] h-[300px] relative">
                <img
                  src={URL.createObjectURL(item.file)}
                  alt=""
                  className="w-full h-full object-cover rounded-b-xl"
                />
                <button
                  style={{ boxShadow: "0 0 4px black" }}
                  className="absolute top-2 right-2 text-2xl bg-white rounded-full h-[50px] w-[50px]"
                  onClick={() => favListAdd(item.id)}
                >
                  {item.fav ? "❤️" : "🤍"}
                </button>
                <div className="absolute bottom-0 left-0 px-5 py-4 w-full bg-black/40 backdrop-blur-md rounded-t-lg">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
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

          {/* Favorite Templates Section */}
          <p className="mt-10 text-2xl">Favorite Templates</p>
          <div className="flex flex-row gap-5 mt-5 flex-wrap">
            {favList.map((item) => (
              <div key={item.id} className="w-[500px] h-[300px] relative">
                <img
                  src={URL.createObjectURL(item.file)}
                  alt=""
                  className="w-full h-full object-cover rounded-b-xl"
                />
                <div className="absolute bottom-0 left-0 px-5 py-4 w-full bg-black/40 backdrop-blur-md rounded-t-lg">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
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
    </div>
  );
}

export default SaveTemplate;
