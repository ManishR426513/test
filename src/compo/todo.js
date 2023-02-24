import React from "react";

class Todo extends React.Component{

     constructor(){
        super()
        this.state={
            changebutton:'true',
            data:'',
            list:[],
            updateddata:'',
            updatedid:'',
        }
     }


     change=(e)=>{
        this.setState({
            data:e.target.value,
            updateddata:e.target.value
        })
       } 


     sub(){
     
        var obj={
            id:Math.random(),
            work:this.state.data
            
        }
       
       
       this.setState({
        list:[obj,...this.state.list],
        data:''
       })
       
       
      
       
     }

     del(e){
    // console.log(e)
    var id=e.id
    
    const updatelist=this.state.list.filter((e)=>e.id!= id)

    this.setState({
        list:updatelist
    })


   
     }

     firstupdate=(e)=>{
       

         this.setState({
            changebutton:false,
            updatedid:e.id,
            data:e.work
         })
     }

     lastupdate=()=>{
       
        

          var updatelist=this.state.list.map(item=>{
            if(item.id === this.state.updatedid){
              
                
           return {...item,work:this.state.updateddata}
            
                } 
                    return item;
                  
            
          })


         

          this.setState({
            list:updatelist,
            changebutton:true

          })
   
          
         
         

     }

 



    render(){


        return(
           <div>
           

            <input  onChange={this.change}  value={this.state.data} />
          {this.state.changebutton ? <button onClick={()=>this.sub()} >Sub</button>  :  <button onClick={()=>this.lastupdate()} >Update</button>}
            {
                this.state.list.map((e)=>{
                    return(
                        <div>

                            <p>{e.id}</p>
                            <p>{e.work}</p>
                             <button onClick={()=>this.del(e)}  >Delete</button>
                           <button  onClick={()=>this.firstupdate(e)} >Update</button>
                            
                        </div>
                    )
                })
            }

            
           </div>
        )
    }
}

export default Todo;