import { useState } from 'react'
import Login from './components/Login'
import { createBrowserRouter ,RouterProvider,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Landingpage from './components/Landingpage'
import Chat from './components/Chat'
import Get_started from './components/Get_started'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <Landingpage /></>
    },
    // {
    //   path: "/aboutus",
    //   element: <><Navbar/><Aboutus/></>
    // },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path:"/getstarted",
      element : <Get_started/>
    },
    {
      path:"/chat",
      element : <Chat/>
    }
  ]);
  return (
<>
      <RouterProvider router={router} />
    </>
  )
}

export default App
