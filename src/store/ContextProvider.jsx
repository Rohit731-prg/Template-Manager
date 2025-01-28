import React, { useState } from 'react'
import {contextAPI} from './contextAPI'

function ContextProvider({children}) {
    const [mode, setMode] = useState(false);
    const UserData = {
      userName : 'Titan',
      password : '1950'
    }
    const [saveTemplateList, setSaveTemplateList] = useState([]);
    const [favList, setFavList] = useState([]);
    const [mainTemplate, setMainTemplate] = useState(null);
  return (
    <contextAPI.Provider 
    value={{mode, setMode, UserData, saveTemplateList, setSaveTemplateList, favList, setFavList, mainTemplate, setMainTemplate}}>
      {children}
    </contextAPI.Provider>
  )
}

export default ContextProvider