import React, { use, useState } from 'react'
import { Images } from '../assets/images/images'
import AddProductForm from '../components/forms/AddProductForm'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ShopProducts } from '../dummyData/ShopProducts';


const AddProducts = () => {

  const [pimg1, setPimg1] = useState(null);
  const [pTitle, setPTitle] = useState('Product Title');
  const [category, setCategory] = useState('Category');
  const [subCategory, setSubCategory] = useState('Sub Category');
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState('110');
  const [discount, setDiscount] = useState('30');
  const [discountPrice, setDiscountPrice] = useState('80');
  const [stock, setStock] = useState('500')

  const { productId } = useParams();

  { console.log(productId); }



  useEffect(() => {

    if (productId) {
      const foundProduct = ShopProducts.find((item) => item._id === productId);
      console.log("foundProduct======>>>>>", foundProduct);

      if (foundProduct) {
        setPTitle(foundProduct.name);
        setCategory(foundProduct.category);
        setSubCategory(foundProduct.subCategory);
        setPrice(foundProduct.price);
        setDiscount(foundProduct.discount);
        setDiscountPrice(foundProduct.price - (foundProduct.price * foundProduct.discount / 100));  // simple logic
        setStock(foundProduct.stock);
        setSize(foundProduct.sizes);
        setPimg1(foundProduct.image[0]);
      }

    } else {
      console.log('error');

    }

  }, [productId])


  return (
    <div className='addProducts'>


      <div className="preview-product box">
        <div className="img-box">
          <img src={pimg1 ? pimg1.name ? URL.createObjectURL(pimg1) : pimg1 : Images.p1} alt="img" />
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
            <p>{stock} Items Left</p>
          </div>
        </div>
      </div>



      <div className="main-add-product box">
        <AddProductForm pimg1={pimg1} setPimg1={setPimg1} pTitle={pTitle} setPTitle={setPTitle} setCategory={setCategory} setSubCategory={setSubCategory} setSize={setSize} setPrice={setPrice} setDiscount={setDiscount} setDiscountPrice={setDiscountPrice} discount={discount} price={price} setStock={setStock} />
      </div>
    </div>
  )
}

export default AddProducts