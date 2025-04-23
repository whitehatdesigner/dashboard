import React from 'react'
import { Images } from '../assets/images/images'
import { FaCamera } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import PrimaryBtn from '../components/PrimaryBtn'

const AdminProfile = () => {
  return (
    <div className='admin-profile-section'>
        <h3>My Profile</h3>

        <div className="admin-card box-card">
            <div className="admin-img">
                <img src={Images.dummyImg} alt="img" />
                <Link to={'#'} className="edit-photo"><FaCamera /></Link>
                
            </div>
            <div className="admin-info">
                <h4>Ankit Shukla</h4>
                <span>Admin</span>
                <p>Delhi, India</p>
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
                    <p>Ankit</p>
                </div>
                <div className="box">
                    <span>Last Name</span>
                    <p>Shukla</p>
                </div>
                <div className="box">
                    <span>Date of Birth</span>
                    <p>05-03-2003</p>
                </div>
                <div className="box">
                    <span>Email Address</span>
                    <p>ankitshukla128476@gmail.com</p>
                </div>
                <div className="box">
                    <span>Phone Number</span>
                    <p>9899-506-105</p>
                </div>
                <div className="box">
                    <span>User Role</span>
                    <p>Admin</p>
                </div>
                <div className="box">
                    <span>Country</span>
                    <p>India</p>
                </div>
                <div className="box">
                    <span>City</span>
                    <p>Delhi</p>
                </div>
                <div className="box">
                    <span>Zip code</span>
                    <p>110094</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminProfile