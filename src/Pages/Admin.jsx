import React, { useEffect, useState } from 'react';

import './Admin.css'
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,

 
} from '@chakra-ui/react'
 let initialstate= {
  image:"",
  brand:"",
  price:"",
  description:"",
  gender:"",
 }

const Admin = () => {
  const [product, setproduct]= useState(initialstate);

  const handelchange= (e)=>{
    
    const {name, value}= e.target; 
    setproduct((prev)=>{
         return {...prev, [name]:name==="price"?+value:value};
          }
    )
    

  }; 

  const handelsubmit= (e)=>{
    e.preventDefault();
    console.log(product);
    setproduct(initialstate);
     
  } 

  useEffect(() => {
    console.log(product);
  }, [product]);

  
      return (
       <div className='add'>
  
      <form onSubmit={(e)=>{
        handelsubmit(e);

      }}>
      
   
      <FormControl>
           <Heading color="white"
            bg="blue.500" >Add Product in store</Heading>
          
          <FormLabel>
            Image
          </FormLabel>
          <Input 
            
            type="url" 
            name= "image"
            value={product.image}
            onChange={(e)=>handelchange(e)
            }
            placeholder='Enter url' />

          <FormLabel>
            Brand Name
          </FormLabel>
          <Input  type="text" 
            placeholder='Enter brand'
             name= "brand"
            value={product.brand}
            onChange={(e)=>handelchange(e)}

          />

          <FormLabel>
          Price
          </FormLabel>
          <Input  type="number" placeholder='Enter Price'
             name= "price"
            value={product.price}
            onChange={(e)=>handelchange(e)}

          />

          <FormLabel>
           Description
          </FormLabel>
          <Input  type="text" placeholder='Enter Description'
              name= "description"
            value={product.description}
            onChange={(e)=>handelchange(e)}

          />
          
          <FormLabel> Select Gender</FormLabel>
            <Select 
         
            name="gender"
            defaultValue="male"
            onChange={(e)=>handelchange(e)}
             >
            <option value='male'   >Male</option>
            <option value='female' >Female</option>
            <option value='kids'   >Kids</option>
        </Select>


          <Button  margin="4" 
            paddingX="4"
            paddingY="4" bg="blue.500" color="white" type="submit">Add product</Button>
         
       

         </FormControl>
         </form>
        
    </div>
    
  )
}

export default Admin
