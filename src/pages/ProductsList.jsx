import React from 'react'
import { FaStar, FaShoppingCart, FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../components/PrimaryBtn';
import { IoEyeOutline } from 'react-icons/io5';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';
import { Images } from '../assets/images/images';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterProducts, selectPaginatedProducts, selectTotalPages, setCurrentPage, setItemsPerPage, setSearchTerm } from '../redux/slices/productsSlices';


const ProductsList = () => {

  const navigate = useNavigate();

  const handleProduct = (ProdcutId) => {
    navigate(`/addproducts/${ProdcutId}`);
  }
  
  const dispatch = useDispatch();
  const paginatedProducts = useSelector(selectPaginatedProducts);
  const currentPage = useSelector(state => state.productSlice.currentPage);
  const itemsPerPage = useSelector(state => state.productSlice.itemsPerPage);
  const totalPages = useSelector(selectTotalPages);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleItemsPerPageChange = (e) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
    dispatch(setCurrentPage(1)); 
  };

  return (
    <div className="product-table-container">

      <div className="productList-features">
        <div className="shortList">
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          Entries per page
        </div>
        <div className='right-part'>
          <Link to={`/addproducts`}><PrimaryBtn name={'Add Product'} /></Link>
          <div className="search-box">
            <label htmlFor="search">Search:</label>
            <input type="text" placeholder='Search items...' onChange={handleSearch} />
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
          {paginatedProducts.map((product, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{product._id}</td>
              <td className='product-details'>
                <div className="product-img">
                  <img src={product.image[0]} alt="img" />
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
                  <button className="cart-button" onClick={() => {handleProduct(product._id)}}>
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
          <li><Link to={'javascript:void(0)'} onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>Previous</Link></li>

          {[...Array(totalPages)].map((_, i) => (
            <li>
            <Link
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? 'active-pagination' : ''}
            >
              {i + 1}
            </Link>
            </li>
          ))}

          <li><Link to={'javascript:void(0)'}  onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>Next</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsList