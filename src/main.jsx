import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={1500} />
    <RouterProvider router={router}/>
  </React.StrictMode>
)
