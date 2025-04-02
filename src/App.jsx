import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Ecommerce from './pages/Ecommerce'
import AddProducts from './pages/AddProducts'
import Admin from './pages/Admin'
import Blogs from './pages/Blogs'
import Users from './pages/Users'
import CategoriesMangement from './pages/CategoriesMangement'
import ProductsList from './pages/ProductsList'
import AllOrders from './pages/AllOrders'
import PandingOrders from './pages/PandingOrders'
import ReturnOrders from './pages/ReturnOrders'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Dashboard/>,
      children:[
        {
          path:"/ecommerce",
          element:<Ecommerce/>
        },
        {
          path:"/addproducts",
          element:<AddProducts/>
        },
        {
          path:"/productslist",
          element:<ProductsList/>
        },
        {
          path:"/categoriesmangement",
          element:<CategoriesMangement/>
        },
        {
          path:"/allorders",
          element:<AllOrders/>
        },
        {
          path:"/pandingorders",
          element:<PandingOrders/>
        },
        {
          path:"/returnorders",
          element:<ReturnOrders/>
        },
        {
          path:"/admin",
          element:<Admin/>
        },
        {
          path:"/blogs",
          element:<Blogs/>
        },

        {
          path:"/users",
          element:<Users/>
        },

      ]
    }
  ]
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App