import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductLayout from './ProductLayout.jsx'
import Product from './components/product/Product.jsx'
import AddProject from './components/product/AddProject.jsx'
import UpdateProduct from './components/product/UpdateProduct.jsx'
import UserLayout from './UserLayout.jsx'
import UserLogin from './components/user/UserLogin.jsx'
import RegisterUser from './components/user/RegisterUser.jsx'
import UserProfile from './components/user/UserProfile.jsx'


const router = createBrowserRouter([
  {
    path:'/product',
    element:<ProductLayout/>,
    children:[
      {
        path : "",
        element:<Product/>
      },
      {
        path : "add",
        element:<AddProject/>
      },
      {
        path : "update",
        element:<UpdateProduct/>
      }
    ]
  },
  {
    path:'/user',
    element:<UserLayout/>,
    children:[
      {
        path:"",
        element:<UserLogin/>
      },
      {
        path:"create",
        element:<RegisterUser/>
      },
      {
        path : "profile",
        element:<UserProfile/>
      }
    ]
  },
  {
    path:'',
    element:<ProductLayout/>,
    children:[
      {
        path:"",
        element:<Product/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
