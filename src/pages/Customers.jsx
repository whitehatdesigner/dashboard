import React from 'react'
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { customerData } from '../dummyData/customerData';

const Customers = () => {
  
  const navigate = useNavigate();

  const handleCustomerDetails = (customerId) => {
    navigate(`/customer-details/${customerId}`);
}

  return (  
    <div className='customers-list-page'>
      <div className="section-heading">
        <h3>Customers List</h3>
      </div>

      <table className='customers-list'>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Total Orders</th>
            <th>Total Spent</th>
            <th>Join Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (

            <tr key={index}>
              <td>#{customer.customerId}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.orders}</td>
              <td> {customer.totalSpent}</td>
              <td>{customer.joinDate}</td>
              <td>
                <div className="action-buttons">
                  <button className="cart-button" onClick={() => handleCustomerDetails(customer.customerId) }>
                    <IoEyeOutline />
                  </button>
                  <button className="delete-button">
                    <MdOutlineDelete />
                  </button>
                </div>
              </td>
            </tr>

          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Customers