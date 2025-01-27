import React, { useContext, useEffect } from "react";
import bg from "../assets/bg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { contextAPI } from "../store/contextAPI";

function SaveTemplate() {
  const { saveTemplateList, setSaveTemplateList } = useContext(contextAPI);
  const navigate = useNavigate();
  const deleteTemplate = (id) => {
    const updatedList = saveTemplateList.filter((item) => item.id == id);
    setSaveTemplateList(updatedList);
  };

  const favListAdd = () => {
    setSaveTemplateList((prev) =>
      prev.map((item) => ({ ...item, fav: !item.fav }))
    );
  };

  return (
    <div className="w-full h-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full h-full bg-cover bg-center py-10 sm:px-20 px-5 text-white "
      >
        <div className="flex flex-row justify-between">
          <p className="sm:text-3xl font-bold">Template</p>
          <div className="flex flex-row sm:gap-10 gap-2 ">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/save-template"}>Templates</NavLink>
          </div>
          <button
            className="sm:px-5 sm:py-3 bg-black text-white rounded-lg font-semibold px-3 py-2 cursor-pointer sm:text-lg text-sm"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>

        <div className="">
          <p className="mt-10 text-2xl">Last Uptated Templates</p>
          <div className="flex flex-row gap-5 mt-5">
            {saveTemplateList.map((item, index) => (
              <div key={index} className="w-[500px] h-[300px] relative ">
                <img
                  src={URL.createObjectURL(item.file)}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  style={{ boxShadow: "0 0 4px black" }}
                  className="absolute top-2 right-2 text-2xl bg-white rounded-full h-[50px] w-[50px]"
                  onClick={() => favListAdd(item.id)}
                >
                  {item.fav ? "❤️" : "🤍"}
                </button>
                <div className="absolute bottom-0 left-0 px-5 py-4 w-full bg-black/40 backdrop-blur-md rounded-t-lg">
                  <p className="text-black text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-black text-sm mt-1">{item.description}</p>
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
          <div>
            <p className="text-2xl mt-5 mb-5">Favarate Templates</p>
            {saveTemplateList.map((item, index) => (
              <div key={index} className="w-[500px] h-[300px] relative ">
                {item.fav ? (
                  <div className="w-[500px] h-[300px]">
                    <img
                      src={URL.createObjectURL(item.file)}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <button
                      style={{ boxShadow: "0 0 4px black" }}
                      className="absolute top-2 right-2 text-2xl bg-white rounded-full h-[50px] w-[50px]"
                      onClick={() => favListAdd(item.id)}
                    >
                      {item.fav ? "❤️" : "🤍"}
                    </button>
                    <div className="absolute bottom-0 left-0 px-5 py-4 w-full bg-black/40 backdrop-blur-md rounded-t-lg">
                      <p className="text-black text-lg font-semibold">
                        {item.name}
                      </p>
                      <p className="text-black text-sm mt-1">
                        {item.description}
                      </p>
                      <button
                        className="px-5 py-1 bg-red-500/80 hover:bg-red-600 text-white rounded-md text-base font-semibold cursor-pointer mt-3"
                        onClick={() => deleteTemplate(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveTemplate;
