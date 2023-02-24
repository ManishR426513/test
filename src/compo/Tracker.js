import React from "react";
import { useState } from "react";


 const Tracker=()=>{

    const [data, setdata] = useState('');
  const [list, setlist] = useState([]);
  
    
  const changing = (e) => {
    setdata(e.target.value);
  };

  const submit = () => {
    const obj = {
      id: Math.random(),
      exp: data
    };
   
    const newlist = [...list, obj];
    setlist(newlist);
     setdata('')
    
  };


    
  const del=(e)=>{
      var id=e.id
    const deleteitem=list.filter((e)=>e.id!= id)
    setlist(deleteitem)

  }

  const TotalCount = () =>{
    var sum=0;
    list.map((e)=>{
     sum += parseInt(e.exp);
    })
    
    
      return sum

      
  }


  

    return(
        <div>
           
           <h1>Track</h1>
<input onChange={changing} value={data} type="number" />
      <button onClick={submit}>Submit</button>
      <br /> <br />
      {list.map((e) => {
        return (
          <div>
            <p>{e.exp}</p>
            <button onClick={()=>del(e)}  >Del</button>
          </div>
        );
      })}


      <p>Total: {TotalCount()}</p>

   


        </div>
    )
 }

 export default Tracker;