import React from 'react'

const AddCategories = () => {
    return (
        <div className='main-categoriForm'>
            <div className="products-information">
                <h4 className="sub-heading">General Information</h4>

                <div className="main-inputs">

                    <div className="group-box">
                        <div className="input-box">
                            <label htmlFor="category-title">Category Title</label>
                            <input type="text" placeholder='Enter Title' id='category-title' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="sub-category-title">Sub Category Title</label>
                            <input type="text" placeholder='Enter Sub Category Title' id='sub-category-title' />
                        </div>
                    </div>

                    <div className="group-box">

                        <div className="input-box">
                            <label htmlFor="category-image">Add Categories Image</label>
                            <input type="file" id="category-image" /> 
                           
                        </div>

                        <div className="input-box">

                        </div>
                    </div>

                    <div className="form-btn">
                        <input type="submit" value="Add Categories" className='primary-btn' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategories