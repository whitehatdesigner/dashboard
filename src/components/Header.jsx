import React, { useEffect, useRef, useState } from 'react'
import { IoIosLogOut, IoMdNotificationsOutline } from 'react-icons/io'
import { IoMenu, IoMoonOutline } from 'react-icons/io5'
import { Images } from '../assets/images/images'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../redux/slices/sidebarToggle'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { FaRegMessage, FaRegUser } from 'react-icons/fa6'
import { darkModeToggle } from '../redux/slices/darkModeSlice'
import { logout } from '../redux/slices/authSlice'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSettingDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const mode = useSelector((state) => state.darkMode.mode);
  useEffect(() => {

    let root = window.document.getElementById('root');

    console.log(mode);

    if (mode) {
      root.classList.add('darkmode-active');
    } else {
      root.classList.remove('darkmode-active');
    }
  }, [mode])

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.currentUser);

  {console.log(user);
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className='main-header'>
      <div className="menu-icon" onClick={() => dispatch(toggle())}>
        <IoMenu />
      </div>

      <div className="admin-setting">
        <div className={`${mode ? "actived" : ''}`} onClick={() => dispatch(darkModeToggle())}>
          <IoMoonOutline />
        </div>
        <div className="notification">
          <IoMdNotificationsOutline /> <span></span>
        </div>

        <div className="admin-profile">
          <div className="profile-icon" onClick={handleSettingDropdown}>
            <img src={Images.profileIcon} alt="profile icon" />
          </div>
          <div className="admin-name">
            <p>Hi.. <span><b>{user?.firstname+" "+ user?.lastname}</b></span></p>
          </div>


          {/* ============= admin-sub-link ========= */}

          {showDropdown && (
            <div className="sub-link-drop-down" ref={dropdownRef}>
              <p>Welcome {user?.firstname}!</p>
              <div className="dropdown">
                <ul>
                  <li><Link to={"/admin-profile"}><FaRegUser /> Profile</Link></li>
                  <li><Link to={"javascript:void(0)"}><FaRegMessage /> Message</Link></li>
                  <li><Link to={"javascript:void(0)"}> <MdAttachMoney /> Pricing</Link></li>
                  <li className='logout-btn' onClick={handleLogout}><IoIosLogOut /> Logout</li>
                </ul>
              </div>
            </div>
          )

          }

        </div>

      </div>
    </div>
  )
}

export default Header