import React from 'react'
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Customers = () => {

  
  const navigate = useNavigate();


  const customerData = [
    {
      customerId: 1654,
      name: 'John D. Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      orders: 12,
      totalSpent: '$2,450.00',
      joinDate: 'Jan 15, 2022',
      status: 'Active'
    },
    {
      customerId: 2864,
      name: 'Sarah M. Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 (555) 987-6543',
      orders: 8,
      totalSpent: '$1,780.50',
      joinDate: 'Mar 22, 2023',
      status: 'Active'
    },
    {
      customerId: 3325,
      name: 'Robert K. Williams',
      email: 'robert.w@example.com',
      phone: '+1 (555) 456-7890',
      orders: 3,
      totalSpent: '$450.25',
      joinDate: 'Nov 5, 2023',
      status: 'Inactive'
    },
    {
      customerId: 4348,
      name: 'Emily T. Davis',
      email: 'emily.d@example.com',
      phone: '+1 (555) 789-0123',
      orders: 15,
      totalSpent: '$3,120.75',
      joinDate: 'Aug 10, 2021',
      status: 'Active'
    },
    {
      customerId: 5789,
      name: 'Michael B. Anderson',
      email: 'michael.a@example.com',
      phone: '+1 (555) 234-5678',
      orders: 5,
      totalSpent: '$890.00',
      joinDate: 'Feb 28, 2024',
      status: 'New'
    }
  ];

  
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