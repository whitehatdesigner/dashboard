import React, { useState } from 'react'
import { Images } from '../../assets/images/images'

const AddProductForm = () => {
    const [img, setImg] = useState(null)
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
                                <img src={img?.name ? URL.createObjectURL(img) : Images.uploadImg} alt="img" />
                                <input type="file" id='img1' hidden onChange={(e) => {
                                    let allImgs = [...e.target.files][0]
                                    console.log(allImgs);
                                    setImg(allImgs)
                                }} />
                            </label>
                        </div>
                        <div className="item">
                            <label htmlFor="img2">
                                <img src={Images.uploadImg} alt="img" />
                                <input type="file" id='img2' hidden />
                            </label>
                        </div>
                        <div className="item">
                            <label htmlFor="img3">
                                <img src={Images.uploadImg} alt="img" />
                                <input type="file" id='img3' hidden />
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
                                <input type="text" placeholder='Items Name' id='product-name' />
                            </div>
                            <div className="input-box">
                                <label htmlFor="product-categories">Product Categories</label>
                                <select id="product-categories">
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="kids">kids</option>
                                </select>
                            </div>
                        </div>

                        <div className="group-box">

                            <div className="input-box">
                                <label htmlFor="product-categories">Sub Categories</label>
                                <select id="product-categories">
                                    <option value="topwear">Topwear</option>
                                    <option value="bottomwear">Bottomwear</option>
                                    <option value="Winterwear">Winterwear</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <div className="label-heading">Size:</div>

                                <div className="size-items">
                                    <label htmlFor="size-s">
                                        <input type="checkbox" name="" id="size-s" />S
                                    </label>
                                    <label htmlFor="size-m">
                                        <input type="checkbox" name="" id="size-m" />M
                                    </label>
                                    <label htmlFor="size-xl">
                                        <input type="checkbox" name="" id="size-xl" />XL
                                    </label>
                                    <label htmlFor="size-xxl">
                                        <input type="checkbox" name="" id="size-xxl" />XXL
                                    </label>


                                </div>

                            </div>
                        </div>

                        <div className="group-box">

                            <div className="input-box">
                                <label htmlFor="product-price">Price</label>
                                <input type="text" placeholder='Items Price' id='product-price' />
                            </div>

                            <div className="input-box">
                                <label htmlFor="product-discount">Discount Price</label>
                                <input type="text" placeholder='20%' id='product-discount' />
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