import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { FiEdit3, FiPercent } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (dropdownName) => {
    if (activeMenu === dropdownName) {
      setActiveMenu(null);
    }else{
      setActiveMenu(dropdownName);
    }
  }

  return (
    <div className="primary-menu">
      <ul>
        <li>
          <NavLink to={"/ecommerce"} className={(isActive) => (isActive ? "active-nav-btn" : "nav-btn")}>
            <div className="sub-menu nav-menu">
              <span>
                <IoHomeOutline /> <p>Dashboard</p>
              </span>
            </div>
          </NavLink>
        </li>
        
        <li>
          <div className={`nav-btn ${activeMenu === "products" ? "active-dropdown" : ""}`} onClick={() => toggleDropdown("products")}>
            <div className="sub-menu nav-menu">
              <span>
                <MdOutlineShoppingCart /> <p>Products</p>
              </span>
              <IoIosArrowDown className="down-arrow" />
            </div>

            {activeMenu === "products" && (<div className="dropdown-menu">
              <ul>
                <li>
                  <NavLink to={"/productslist"} className={"sub-nav-btn"}>
                    <span><GoDot /> <p>Products List</p></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/addproducts"} className={"sub-nav-btn"}>
                    <span><GoDot /> <p>Add Product</p> </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoriesmangement"} className={"sub-nav-btn"}>
                    <span><GoDot /> <p>Categories Management</p> </span>
                  </NavLink>
                </li>
              </ul>
            </div>)}

          </div>

        </li>
        <li>
          <div className={`nav-btn ${activeMenu === "orders" ? "active-dropdown" : ""}`} onClick={() => toggleDropdown("orders")}>
            <div className="sub-menu nav-menu">
              <span>
                <IoBagHandleOutline /> <p>Orders</p>
              </span>
              <IoIosArrowDown className="down-arrow" />
            </div>

            {activeMenu === "orders" && (<div className="dropdown-menu">
              <ul>
                <li>
                  <NavLink to={"/allorders"} className={"sub-nav-btn"}>
                    <span><GoDot /> <p>All orders list</p> </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/pandingorders"} className={"sub-nav-btn"}>
                    <span><GoDot /> <p>Panding Orders</p></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/returnorders"} className={"sub-nav-btn"}>
                    <span><GoDot /> <p>Return Orders</p> </span>
                  </NavLink>
                </li>
              </ul>
            </div>)}
          </div>
        </li>
        <li>
          <NavLink to={"/customers"} className={"nav-btn"}>
            <div className="sub-menu nav-menu"> 
              <span> 
                <HiOutlineUsers /> <p>Customers</p>
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ecommerce"} className={"nav-btn"}>
            <div className="sub-menu nav-menu">
              <span>
                <FiPercent /> <p>Promotions/Discounts</p>
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ecommerce"} className={"nav-btn"}>
            <div className="sub-menu nav-menu">
              <span>
                <FiEdit3 /> <p>Content Management</p> 
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ecommerce"} className={"nav-btn"}>
            <div className="sub-menu nav-menu">
              <span>
                <CiMedal /> <p>Sales Analytics</p> 
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ecommerce"} className={"nav-btn"}>
            <div className="sub-menu nav-menu">
              <span>
                <AiOutlineUser /> <p>Staff Management</p> 
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
