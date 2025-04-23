import React from 'react'
import { Images } from '../../assets/images/images'

const MainCategories = () => {
    return (
        <div className="main-categories">

            <div className="heading">
                <h3>Categories</h3>
            </div>

            <div className="categorie-items">
                <div className="item">
                    <div className="img-box">
                        <img src={Images.menImage} alt="img" />
                        <p>Men</p>
                    </div>

                </div>

                <div className="item">
                    <div className="img-box">
                        <img src={Images.womenImage} alt="img" />
                        <p>Women</p>
                    </div>
                </div>

                <div className="item">
                    <div className="img-box">
                        <img src={Images.kidsImage} alt="img" />
                        <p>kids</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MainCategories