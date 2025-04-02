import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoMenu, IoMoonOutline } from 'react-icons/io5'
import { Images } from '../assets/images/images'
import { useDispatch } from 'react-redux'
import { toggle } from '../redux/slices/sidebarToggle'

const Header = () => {
  const dispatch =  useDispatch();
  return (
    <div className='main-header'>
      <div className="menu-icon" onClick={()=>dispatch(toggle())}>
        <IoMenu />
      </div>

      <div className="admin-setting">
        <div className="dark-mode">
        <IoMoonOutline />
        </div>
        <div className="notification">
        <IoMdNotificationsOutline /> <span></span>
        </div>

        <div className="admin-profile">
          <div className="profile-icon">
            <img src={Images.profileIcon} alt="profile icon" />
          </div>
          <div className="admin-name">
            <p>Hi.. <span><b>Ankit Shukla</b></span></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header