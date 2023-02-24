import React from "react";
import { add,decreaseqty,del,increaseqty, mvcart, wishlist } from "../redux/action";
import {connect} from 'react-redux';

class Cart extends React.Component{

 
    constructor(){
        super()
       
      
        this.state={
            data:[],
            coupon:'',
            check:true,
            removecoupon:true,
           
         
        }
    }

   async componentDidMount(){
     
     let result =  await fetch('https://fakestoreapi.com/products')
     let res =await result.json()
     

     this.setState({
        data:res,
        
     })

    }
    
    totalprice(qty,price){
          return qty*price     
    }

    totalbill(item){
        let price = 0;
        item.map((ele)=>{
           price = ele.price * ele.qty + price
        });
        return Math.floor(price)
    }


    coupounbill(item){
        let price = 0;
        item.map((ele)=>{
           price = ele.price * ele.qty + price
        });
       var ck= Math.floor(price)*10/100
      return Math.floor(price)-ck
    }

    changing(e){
    
     this.setState({
        coupon:e.target.value
     })
    }

    Apply(){

       
    
      if(this.state.coupon=="flat10"){
          
    
    
     this.setState({
        check:false,
        removecoupon:false
     })
    

      }else{
      
   alert("coupon is not valid")
      }
    } 

 

    render(){
      
     const{items}=this.props 
     const{wish}=this.props

        return(
            <div>

                <p>wishlist</p>
                {
                    wish.map((item)=>{
                        return(
                            <div>
                            <img src={item.img} height="20vh"/>
                            <p>{item.price}</p>
                            <p>{item.title}</p> 
                            <button onClick={()=>this.props.mvcart(item)} >Move To Cart</button>
                          
                             </div>
                        )
                    })
                }
                  
               
                <p>cart</p>
                {
                  items.map((item)=>{
                    return(
                        <div>
                            <img src={item.img}  height="20vh" /><br/><br/>
                         
                          
                            <button  onClick={()=>this.props.increaseqty(item)} >+</button>
                            <p>Qty:{item.qty}</p>
                            <button onClick={()=>this.props.decreaseqty(item)} >-</button><br/><br/>
                            <button  onClick={()=>this.props.del(item)} >Delete</button><br/><br/>
                            <button onClick={()=>this.props.wishlist(item)} >Move To wishlist</button>
                            <p>Price : {this.totalprice(item.qty,item.price,)}</p>
                          
                            </div>
                    )
                  })
                }

               

               <label>Apply coupoun:</label> <input onChange={(e)=>this.changing(e)} value={this.state.coupon} /> 
               <button onClick={()=>this.Apply()} >Apply</button>
               {this.state.check ? <p>totalbill:{this.totalbill(items)}</p>  :      <p>totalbill:{this.coupounbill(items)}   </p>            }

               {this.state.removecoupon?" ":<button onClick={()=>this.setState({check:true   ,removecoupon:true})} >Removecoupon</button>}

                <h1>Product</h1>


                

               <div>
              {

          
          this.state.data.map((item)=>{
            return(
                <div>
                    <img  src={item.image} height="20vh" />
                    <p>{item.price}</p>
                    <button onClick={()=>this.props.add(item)}>Cart</button>
                    
                    
                </div>
            )
          })

       
              }



               </div>

            </div>
        )
    }

}

const mapStateToProps = state =>{
    console.log(state)
      return{
      items:state.cart,
      wish:state.wishlist
      }
  }

  const  mapDispatchToProps=(dispatch)=>{
    return{
       
        add:item=>dispatch(add(item)),
        del:item=>dispatch(del(item)),
        increaseqty:item=>dispatch(increaseqty(item)),
        decreaseqty:item=>dispatch(decreaseqty(item)),
        wishlist:item=>dispatch(wishlist(item)),
        mvcart:item=>dispatch(mvcart(item))
        

     
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart);