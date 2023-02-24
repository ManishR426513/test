import React, { Component } from "react";

class ClassTracker extends Component{
      
    constructor(){
        super();
        this.state={
            data:'',
            list:[]
        }
    }

    submit(){

        const obj={
            id:Math.random(),
            amount:this.state.data,
        }
      
        const addamount=[...this.state.list,obj]
         this.setState({
            list:addamount,
            data:''
         })
        
         

    }

    changing(e){
  
  this.setState({
    data:e.target.value
  })
    }

    delete(item){
  
   
  var id =item.id

  const deleteitem=this.state.list.filter((item)=>item.id!=id)
   
  this.setState({
    list:deleteitem
  })
    
    }


    totalamount(){
     
        
        var total=0;
     this.state.list.map((item)=>{
        

        total=total+parseInt(item.amount)
     })

     return   total
     


     
        
    }


    render(){
        return(
            <div>
                <h1>class tracker</h1>

                <input  onChange={(e)=>this.changing(e)}  value={this.state.data} />
              <button onClick={()=>this.submit()} >Submit</button>




              {
                this.state.list.map((item)=>{
                    return(
                        <div>

                           
                            <p>{item.amount}</p>
                            <button onClick={()=>this.delete(item)} >Delete</button>
                            </div>
                    )
                })
              }

              <p>Total Amount:{this.totalamount()}</p>
            </div>
        )
    }
} 
export default ClassTracker;