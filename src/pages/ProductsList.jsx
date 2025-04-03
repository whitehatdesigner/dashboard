import React from 'react'
import { FaStar, FaShoppingCart, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../components/PrimaryBtn';
import { IoEyeOutline } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';
import { Images } from '../assets/images/images';


const ProductsList = () => {
  const products = [
    {
      image: Images.dummyImg,
      name: 'Black T-shirt',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 80.00,
      stock: 486,
      sold: 155,
      category: 'Fashion',
      rating: 4.5,
      reviews: 55
    },
    {
      image: Images.dummyImg,
      name: 'Olive Green Leather Bag',
      sizes: ['S', 'M'],
      price: 136.00,
      stock: 784,
      sold: 674,
      category: 'Hand Bag',
      rating: 4.1,
      reviews: 143
    },
    {
      image: Images.dummyImg,
      name: 'Women Golden Dress',
      sizes: ['S', 'M'],
      price: 219.00,
      stock: 769,
      sold: 180,
      category: 'Fashion',
      rating: 4.4,
      reviews: 174
    },
    {
      image: Images.dummyImg,
      name: 'Gray Cap For Men',
      sizes: ['S', 'M', 'L'],
      price: 76.00,
      stock: 571,
      sold: 87,
      category: 'Cap',
      rating: 4.2,
      reviews: 23
    }
  ];

  return (
    <div className="product-table-container">
      
      <div className="productList-features">
        <div className="shortList">
          <select>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">9</option>
            <option value="1">10</option>
          </select>
          Entries per page
        </div>
        <div className='right-part'>
            <Link to={`javascript:void(0)`}><PrimaryBtn/></Link>
          <div className="search-box">
            <label htmlFor="search">Search:</label>
            <input type="text" placeholder='Search items...' />
          </div>
        </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th className='selectAll'><label htmlFor="all-select"><input type="checkbox" name="all-select" id="all-select" /></label>All</th>
            <th>ID</th>
            <th>Product Name & Size</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><input type="checkbox"/></td>
              <td>{index}</td>
              <td className='product-details'>
                <div className="product-img">
                  <img src={product.image} alt="img" />
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-sizes">
                    Size: {product.sizes.join(', ')}
                  </div>
                </div>
              </td>
              <td className='price'>${product.price.toFixed(2)}</td>
              <td>
                <div className="stock-info">
                  <span className="stock-left">{product.stock} Item Left</span>
                  <span className="stock-sold">{product.sold} Sold</span>
                </div>
              </td>
              <td className='product-category'>{product.category}</td>
              <td>
                <div className="rating-info">
                  <FaStar className="star-icon" />
                  <span>{product.rating}</span>
                  <span className="reviews">({product.reviews} Review{product.reviews !== 1 ? 's' : ''})</span>
                </div>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="cart-button">
                  <IoEyeOutline />
                  </button>
                  <button className="edit-button">
                  <CiEdit />
                  </button>
                  <button className="delete-button">
                  <MdOutlineDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <ul>
          <li><Link to={'javascript:void(0)'}>Previous</Link></li>
          <li className='active-pagination'><Link to={'javascript:void(0)'}>1</Link></li>
          <li><Link to={'javascript:void(0)'}>2</Link></li>
          <li><Link to={'javascript:void(0)'}>3</Link></li>
          <li><Link to={'javascript:void(0)'}>Next</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsList