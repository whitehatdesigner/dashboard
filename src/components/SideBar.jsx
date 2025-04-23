import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Images } from '../assets/images/images'
import Navigation from './Navigation'

const SideBar = () => {

  return (
    <div className={`main-sidebar`}>

    <div className="logo">
      <Link to={'/ecommerce'}>
      <img src={Images.logo} alt="" />
      </Link>
    </div>
        
    <Navigation/>

    </div>
  )
}

export default SideBar