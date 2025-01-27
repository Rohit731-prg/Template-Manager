import React, { useState } from 'react'
import {contextAPI} from './contextAPI'

function ContextProvider({children}) {
    const [mode, setMode] = useState(false);
    const UserData = {
      userName : 'Titan',
      password : '1950'
    }
    const [saveTemplateList, setSaveTemplateList] = useState([]);
  return (
    <contextAPI.Provider value={{mode, setMode, UserData, saveTemplateList, setSaveTemplateList}}>
      {children}
    </contextAPI.Provider>
  )
}

export default ContextProvider