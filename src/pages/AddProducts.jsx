import React, { useState } from 'react'
import { Images } from '../assets/images/images'
import AddProductForm from '../components/forms/AddProductForm'

const AddProducts = () => {

  const [pimg1, setPimg1] = useState(null);
  const [pTitle, setPTitle] = useState('Product Title');
  const [category, setCategory] = useState('Category');
  const [subCategory, setSubCategory] = useState('Sub Category');
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState('110');
  const [discount, setDiscount] = useState('30');
  const [discountPrice, setDiscountPrice] = useState('80');


  {console.log(size);}
  return (
    <div className='addProducts'>


      <div className="preview-product box">
        <div className="img-box">
          <img src={pimg1?.name ? URL.createObjectURL(pimg1) : Images.p1} alt="img" />
        </div>
        <div className="item-content">
          <h4>{pTitle}</h4>
          <span className='item-category'>{`(${category})`}, </span>
          <span className='item-category'>{`(${subCategory})`}</span>

          <div className="price-details">
            <span className='preview-heading'>Price: </span>
            <p className='price'><span className='item-price'>${price}</span><span className='discount-price'>${discountPrice}</span> <span className='discount'>{`(${discount}% off)`}</span></p>
          </div>

          <div className="size-details">
            <span className='preview-heading'>Size: </span>

            <ul>

              {
                size.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>

          <div className="stock">
            <span className='preview-heading'>Stock: </span>
            <p>500 Items Left</p>
          </div>
        </div>
      </div>



      <div className="main-add-product box">
        <AddProductForm pimg1={pimg1} setPimg1={setPimg1} pTitle={pTitle} setPTitle={setPTitle} setCategory={setCategory} setSubCategory={setSubCategory} setSize={setSize} setPrice={setPrice} setDiscount={setDiscount} setDiscountPrice={setDiscountPrice} discount={discount} price={price} />
      </div>
    </div>
  )
}

export default AddProducts