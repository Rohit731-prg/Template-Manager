import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Home from './Components/Home'
import SaveTemplate from './Components/SaveTemplate'

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