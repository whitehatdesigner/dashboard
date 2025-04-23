import React from 'react'
import CustomerProfileCard from '../components/customer/CustomerProfileCard'
import DetailsCard from '../components/customer/DetailsCard'
import CustomerOrderDetails from '../components/customer/CustomerOrderDetails'
import { useNavigate, useParams } from 'react-router-dom'

const CustomerDetails = () => {

  const { customerId } = useParams();
  const navigate = useNavigate();

  return (
    <div className='customer-details-page'>
        <div className="profile-sidebar">
            <CustomerProfileCard/>
        </div>
        <div className="right-part">
            <div className="card-details">
              <DetailsCard/>
              <DetailsCard/>
              <DetailsCard/>
            </div>

            <div className="customer-order-table-details">
                <CustomerOrderDetails/>
            </div>
        </div>
    </div>
  )
}

export default CustomerDetails