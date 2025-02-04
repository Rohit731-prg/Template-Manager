import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Home from './Components/Home'
import SaveTemplate from './Components/SaveTemplate'
import FavTemplateList from './Components/FavTemplateList'
import Maintemplate from './Components/Maintemplate'
import Setting from './Components/Setting'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: '/save-template',
    element: <SaveTemplate />
  },
  {
    path: '/fav-template-list',
    element: <FavTemplateList />
  },
  {
    path: '/maintemplate',
    element: <Maintemplate />
  },
  {
    path: '/setting',
    element: <Setting />
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App