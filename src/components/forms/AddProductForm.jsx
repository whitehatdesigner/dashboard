import React, { useState } from 'react'
import { Images } from '../../assets/images/images'

const AddProductForm = ({ pimg1, setPimg1, setPTitle, setCategory, setSubCategory, setSize, setPrice, setDiscount, setDiscountPrice, discount, price }) => {
    const [pimg2, setPimg2] = useState(null);
    const [pimg3, setPimg3] = useState(null);

    const handleSizeChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setSize((prev) => [...prev, value]);
        } else {
            setSize((prev) => prev.filter(item => item !== value));
        }
    }
    return (
        <main className='add-new-products'>
            <div className="heading">
                <h3>Add New Products</h3>
            </div>

            <form>

                <div className="images-box">

                    <h4 className='sub-heading'>Upload Images</h4>
                    <div className="image-items">
                        <div className="item">
                            <label htmlFor="img1">
                                <img src={pimg1?.name ? URL.createObjectURL(pimg1) : Images.uploadImg} alt="img" />
                                <input type="file" id='img1' hidden onChange={(e) => {
                                    let allImgs = [...e.target.files][0]
                                    console.log(allImgs);
                                    setPimg1(allImgs)
                                }} />
                            </label>
                        </div>
                        <div className="item">
                            <label htmlFor="img2">
                                <img src={pimg2?.name ? URL.createObjectURL(pimg2) : Images.uploadImg} alt="img" />
                                <input type="file" id='img2' hidden onChange={(e) => {
                                    let allImgs = [...e.target.files][0]
                                    setPimg2(allImgs);
                                }} />
                            </label>
                        </div>
                        <div className="item">
                            <label htmlFor="img3">
                                <img src={pimg3?.name ? URL.createObjectURL(pimg3) : Images.uploadImg} alt="img" />
                                <input type="file" id='img3' hidden onChange={(e) => {
                                    let allImgs = [...e.target.files][0]
                                    setPimg3(allImgs);
                                }} />
                            </label>
                        </div>
                    </div>

                </div>

                <div className="products-information">
                    <h4 className="sub-heading">Product Information</h4>

                    <div className="main-inputs">

                        <div className="group-box">
                            <div className="input-box">
                                <label htmlFor="product-name">Product Name</label>
                                <input type="text" placeholder='Items Name' id='product-name' onChange={(e) => {
                                    let productTitle = e.target.value;
                                    setPTitle(productTitle);
                                }} />
                            </div>
                            <div className="input-box">
                                <label htmlFor="product-categories">Product Categories</label>
                                <select id="product-categories" onChange={(e) => {
                                    let catego = e.target.value;
                                    setCategory(catego)
                                }}>
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">kids</option>
                                </select>
                            </div>
                        </div>

                        <div className="group-box">

                            <div className="input-box">
                                <label htmlFor="product-categories">Sub Categories</label>
                                <select id="product-categories" onChange={(e) => (setSubCategory(e.target.value))}>
                                    <option value="Topwear">Topwear</option>
                                    <option value="Bottomwear">Bottomwear</option>
                                    <option value="Winterwear">Winterwear</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <div className="label-heading">Size:</div>

                                <div className="size-items">

                                    <label htmlFor="size-s">
                                        <input type="checkbox" name="a" id="size-s" value="S" onChange={handleSizeChange} />S
                                    </label>
                                    <label htmlFor="size-m">
                                        <input type="checkbox" name="a" id="size-m" value="M" onChange={handleSizeChange} />M
                                    </label>
                                    <label htmlFor="size-xl">
                                        <input type="checkbox" name="a" id="size-xl" value="XL" onChange={handleSizeChange} />XL
                                    </label>
                                    <label htmlFor="size-xxl">
                                        <input type="checkbox" name="a" id="size-xxl" value="XXL" onChange={handleSizeChange} />XXL
                                    </label>

                                </div>

                            </div>
                        </div>

                        <div className="group-box">

                            <div className="input-box">
                                <label htmlFor="product-price">Price</label>
                                <input type="text" placeholder='Items Price' id='product-price' onChange={(e) => setPrice(e.target.value)} />
                            </div>

                            <div className="input-box">
                                <label htmlFor="product-discount">Discount Price</label>
                                <input
                                    type="text"
                                    placeholder="20%"
                                    id="product-discount"
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value) || 0;
                                        setDiscount(value);

                                        let discountAmount = (price * value) / 100;
                                        setDiscountPrice(price - discountAmount);
                                    }}
                                />
                            </div>

                            <div className="input-box">
                                <label htmlFor="product-stock">Stock</label>
                                <input type="text" placeholder='500' id='product-stock' />
                            </div>
                        </div>

                        <div className="group-box">
                            <div className="input-box">
                                <label htmlFor="product-description">Description</label>
                                <textarea name="" id="product-description" cols="30" rows="10" placeholder='Short description about the product'></textarea>
                            </div>
                        </div>

                        <div className="form-btn">
                            <input type="submit" value="Add Product" className='primary-btn' />
                        </div>
                    </div>
                </div>

            </form>
        </main>
    )
}

export default AddProductForm