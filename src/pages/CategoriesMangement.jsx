import React from 'react'
import { Images } from '../assets/images/images'
import MainCategories from '../components/categories/MainCategories'
import SubCategories from '../components/categories/SubCategories'
import AddCategories from '../components/categories/AddCategories'

const CategoriesMangement = () => {
  return (
    <div className='categories-mange'>

      <MainCategories />

      <SubCategories />

      <AddCategories/>

    </div>
  )
}

export default CategoriesMangement