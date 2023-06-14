import React,{useState, useEffect} from 'react';
import './App.css';


const App=()=>
{
  //https://fakestoreapi.com/products
  const [fake,setFake]=useState([]);//State


  console.log(fake);
  useEffect(()=>{  //all the data is store once the website is loaded entire data will fetch and display
    fakestore();
   

   },[])//only once it should be loaded

  const fakestore=async()=>{ //Trying to fetch data using async and await, async() like promises await()like waiting for the promises to be succefully completed await wait for the result
    const response=await fetch("https://fakestoreapi.com/products?");
    //console.log(response);
     const jsonData=await response.json(); //Convert json data into objects //Array of object in array we have objects
      //console.log(jsonData); 
setFake(jsonData); //Update whatever data you have in jsonData
  }
  //fakestore();

 
  
  return(
<>
<h2>Fake API Store</h2>
<div className="container">
  {fake.map((values)=>{  //It run for every object and return the output if we having 20 data then it returns 20 objects
return(
  <>
  <div className="box">
  <div className="content">
<h4>{values.title}</h4>
<p>{values.description}</p>
   </div>
<img src={values.image} alt=" "/>  
</div>

  </>
 
)
})
}

</div>
</>

  );
}

export default App;



