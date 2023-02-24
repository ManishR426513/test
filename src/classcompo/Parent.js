import React,{Component} from "react";
import Child from "./Child";


class Parent extends React.Component{
      
    constructor(){
        super()
        this.state={
            count:0
        }
        
    }

    componentDidUpdate(preState,preProps){
        console.warn(preState.count)
      
  }
     
    submit(){
        this.setState({
         count:this.state.count+1
        })

    }

    


    

    render(){
        return(
            <div>
                
<h1>P</h1>

   

       <h2>{this.state.count}</h2>
       <button onClick={()=>this.submit()}  >Click</button>

            </div>
        )
    }
}

export default Parent;