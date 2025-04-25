import React from 'react'
import { FaCamera } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import PrimaryBtn from '../components/PrimaryBtn'
import { useDispatch, useSelector } from 'react-redux'

const AdminProfile = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.currentUser);
  return (
    <div className='admin-profile-section'>
        <h3>My Profile</h3>

        <div className="admin-card box-card">
            <div className="admin-img">
                <img src={user?.profileImg} alt="img" />
                <Link to={'#'} className="edit-photo"><FaCamera /></Link>
                
            </div>
            <div className="admin-info">
                <h4>{user?.firstname+" "+user?.lastname}</h4>
                <span>{user?.useRole}</span>
                <p>{user?.City}, {user?.Country}</p>
            </div>
        </div>

        <div className="personal-information box-card">
            <div className="section-heading">
                <h3>Personal Information</h3>

                <PrimaryBtn name="Edit" />
            </div>

            <div className="personal-information-list">
                <div className="box">
                    <span>First Name</span>
                    <p>{user?.firstname}</p>
                </div>
                <div className="box">
                    <span>Last Name</span>
                    <p>{user?.lastname}</p>
                </div>
                <div className="box">
                    <span>Date of Birth</span>
                    <p>{user?.dob}</p>
                </div>
                <div className="box">
                    <span>Email Address</span>
                    <p>{user?.emailAddress}</p>
                </div>
                <div className="box">
                    <span>Phone Number</span>
                    <p>{user?.phoneNumber}</p>
                </div>
                <div className="box">
                    <span>User Role</span>
                    <p>{user?.useRole}</p>
                </div>
                <div className="box">
                    <span>Country</span>
                    <p>{user?.Country}</p>
                </div>
                <div className="box">
                    <span>City</span>
                    <p>{user?.City}</p>
                </div>
                <div className="box">
                    <span>Zip code</span>
                    <p>{user?.zipCode}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminProfile