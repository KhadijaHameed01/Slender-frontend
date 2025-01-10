

import React from "react"
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from "./pages/loginForm.jsx";
import SignUpForm from "./pages/SignUpForm.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
    {
    path:"/",
    element:<Home/>
  },
  {
    path:"/blogs",
    element:<Blogs/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/services",
    element:<Services/>
  },
  {
    path:"/loginform",
    element:<LoginForm/>
  },
  {
    path:"/signupform",
    element:<SignUpForm/>
  }
]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)



