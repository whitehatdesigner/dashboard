import React from 'react'
import { Images } from '../assets/images/images'
import AddProductForm from '../components/forms/AddProductForm'

const AddProducts = () => {
  return (
    <div className='addProducts'>


      <div className="preview-product box">
        <div className="img-box">
          <img src={Images.p1} alt="img" />
        </div>
        <div className="item-content">
          <h4>Men Black Slim Fit T-shirt</h4>
          <span className='item-category'>(Men)</span>

          <div className="price-details">
            <span className='preview-heading'>Price: </span>
            <p className='price'><span className='item-price'>$100</span><span className='discount-price'>$80</span> <span className='discount'>(30% off)</span></p>
          </div>

          <div className="size-details">
            <span className='preview-heading'>Size: </span>

            <ul>
              <li>S</li>
              <li>M</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>

          <div className="stock">
            <span className='preview-heading'>Stock: </span>
            <p>500 Items Left</p>
          </div>
        </div>
      </div>



      <div className="main-add-product box">
        <AddProductForm />
      </div>
    </div>
  )
}

export default AddProducts