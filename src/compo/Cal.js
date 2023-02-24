import React from "react";

 class Cal extends React.Component{
       
    constructor(){
        super()
    }
 

  render(){
    return(
        <div>
             
          <input />
          <select name="cars" id="cars">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="*">*</option>
  <option value="/">/</option>
</select>
          
          <input />

        </div>
    )
  }

 }

 export default Cal;