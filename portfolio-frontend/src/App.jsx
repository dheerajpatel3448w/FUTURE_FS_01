/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import About from './components/About'

import Projects from './components/Projects'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Applayout from './Applayout'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children:[
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },

        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
        { path: '/blog', element: <Blog /> },
        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
