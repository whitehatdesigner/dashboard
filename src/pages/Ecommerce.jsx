import React from 'react'
import LeadCards from '../components/cards/LeadCards'

const Ecommerce = () => {
  return (
    <div className='main-dashboard'>
      <div className="lead-cards">
        <LeadCards/>
        <LeadCards/>
        <LeadCards/>
      </div>
    </div>
  )
}

export default Ecommerce