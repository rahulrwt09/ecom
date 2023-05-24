import React from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import Sidebar from '../Components/Sidebar'


const HomePage = () => {
  return (
    <div>
        <Sidebar/>
         <div>
        <Navbar/>
        <ProductCard/>
        </div>
    </div>
 
  )
}

export default HomePage
