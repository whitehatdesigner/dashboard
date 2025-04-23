import React from 'react'
import { Images } from '../../assets/images/images'

const CustomerProfileCard = () => {
  return (
    <div className='customerProfileCard'>
      <div className="background"></div>
      <div className="main-profile">
        <div className="customer-img">
          <img src={Images.dummyImg} alt="img" />
        </div>
        <div className="name"><h2>Michael A. Miner</h2></div>
        <div className="user-name"><span>@michael_cus_2024</span></div>

        <ul>
          <li><strong>Email :</strong><a href="mailto:michaelaminer@dayrep.com">michaelaminer@dayrep.com</a></li>
          <li><strong>Phone :</strong><a href="tel:7600102765">+1 760-010-27</a></li>
          <li><strong>Address :</strong><a href="javascript:void(0)">USA</a></li>
        </ul>

        <button className='primary-btn'>Send Message</button>
      </div>
    </div>
  )
}

export default CustomerProfileCard