import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import ProductList from '../Components/ProductList'
import './sidebar.css'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
 
         <div >
            
            <div className='sidebar'  style={{width:"15%", 
            border:"1px solid black", 
            marginLeft:"10px"}}> <Sidebar /></div>
            <div style={{width:"85%", marginLeft:"20%"}}><ProductList/></div>
       
            
        </div>
    </div>
  
 
  )
}

export default HomePage
