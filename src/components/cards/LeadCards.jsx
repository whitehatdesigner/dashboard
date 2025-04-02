import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { TiArrowSortedUp } from 'react-icons/ti'

const LeadCards = () => {
  return (
    <div className='main-lead-cards'>
        <div className="card-body">
            <div className="card-icon">
            <FaShoppingCart />
            </div>
            <div className="card-heading">
              <span className='card-tagline'>New Leads</span>
              <p className='card-data'>9,526</p>
            </div>
        </div>

        <div className="card-footer">
          <span className='number-data'> <TiArrowSortedUp />8.1%</span>
          <span className='item-details'>View More</span>
        </div>
    </div>
  )
}

export default LeadCards