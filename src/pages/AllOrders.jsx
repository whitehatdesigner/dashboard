import React from 'react'
import OrderCart from '../components/order/OrderCart'
import OrderDetailsList from '../components/order/OrderDetailsList'

const AllOrders = () => {
  return (
    <div className='main-dashboard order-details-page'>

        <div className="order-summary">
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
        </div>

        <div className="main-order-details-list">
            <OrderDetailsList/>
        </div>

    </div>
  )
}

export default AllOrders