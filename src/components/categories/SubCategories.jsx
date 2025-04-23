import React from 'react'
import { Images } from '../../assets/images/images'

const SubCategories = () => {
  return (
    <div className="main-sub-categories">
    <div className="heading">
      <h3>Sub Categories</h3>
    </div>
    <div className="categorie-items">
      <div className="item">
        <div className="img-box">
          <img src={Images.topwearImage} alt="img" />
          <p>Topwear</p>
        </div>

      </div>

      <div className="item">
        <div className="img-box">
          <img src={Images.winterwearImage} alt="img" />
          <p>Winterwear</p>
        </div>
      </div>

      <div className="item">
        <div className="img-box">
          <img src={Images.bottomwearImage} alt="img" />
          <p>Bottomwear</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SubCategories