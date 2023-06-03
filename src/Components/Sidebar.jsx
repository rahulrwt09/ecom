import { useEditable } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
  
 
  const [searchparams, setparams]= useSearchParams();

  const initialstate= searchparams.getAll("category")

  const [category, setcategory] = useState(initialstate || []);
   console.log(searchparams.getAll("category")); 
  const handelchange= (e)=>{
    let newcategory= [...category]
    let value= e.target.value;

    if(newcategory.includes(value))
    {
     newcategory.splice(newcategory.indexOf(value), 1);

    }
    else{
       newcategory.push(value);
      
    }
    setcategory(newcategory)
    
  }

  useEffect(()=>{
    let params= {
      category
    }
   setparams(params)
  },[category]);


  return (
    <div >
       <h3>Filter by</h3>
      <div>
        <input type='checkbox' value="male" onChange={handelchange}
          checked={category.includes("male")}
        />
        <label>Men</label>
      </div>

      <div>
        <input type='checkbox' value="female" onChange={handelchange}
          checked={category.includes("female")}
        />
        <label>Female</label>
      </div>

      <div>
        <input type='checkbox' value="kids" onChange={handelchange}
          checked={category.includes("kids")}
        />
        <label>Kids</label>
      </div>
    </div>
  )
}

export default Sidebar
