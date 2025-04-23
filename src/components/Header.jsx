import React, { useEffect, useRef, useState } from 'react'
import { IoIosLogOut, IoMdNotificationsOutline } from 'react-icons/io'
import { IoMenu, IoMoonOutline } from 'react-icons/io5'
import { Images } from '../assets/images/images'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../redux/slices/sidebarToggle'
import { Link } from 'react-router-dom'
import { MdAttachMoney } from 'react-icons/md'
import { FaRegMessage, FaRegUser } from 'react-icons/fa6'
import { CiCloudSun } from 'react-icons/ci'
import { darkModeToggle } from '../redux/slices/darkModeSlice'

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
            <p>Hi.. <span><b>Ankit Shukla</b></span></p>
          </div>


          {/* ============= admin-sub-link ========= */}

          {showDropdown && (
            <div className="sub-link-drop-down" ref={dropdownRef}>
              <p>Welcome Ankit!</p>
              <div className="dropdown">
                <ul>
                  <li><Link to={"/admin-profile"}><FaRegUser /> Profile</Link></li>
                  <li><Link to={"javascript:void(0)"}><FaRegMessage /> Message</Link></li>
                  <li><Link to={"javascript:void(0)"}> <MdAttachMoney /> Pricing</Link></li>
                  <li className='logout-btn'><Link to={"javascript:void(0)"}><IoIosLogOut /> Logout</Link></li>
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