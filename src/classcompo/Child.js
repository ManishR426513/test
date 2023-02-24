import React from "react";
import Parent from "./Parent";

class Child extends React.Component{
      
    constructor(){
        super()
        this.setState({
            data:'aman'
        })
       
    }

    senddata(){

    }


    render(){
        return(
            <div>
                <h1>C</h1>
             
              
               <button onClick={()=>this.senddata()}  ></button>
            </div>
        )
    }
}

export default Child;