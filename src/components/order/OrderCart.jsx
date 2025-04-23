import React from 'react'
import { RiRefund2Fill } from 'react-icons/ri'

const OrderCart = () => {
  return (
    <div className='item-card'>
        <div className="item-content">
            <div className="heading">Payment Refund</div>
            <span className='total'>490</span>
        </div>
        <div className="item-icon">
        <RiRefund2Fill />
        </div>
    </div>
  )
}

export default OrderCart