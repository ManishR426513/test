const intitalstate = {
  cart: [],
  wishlist:[]
 
};

export const cartreducer = (state = intitalstate, action) => {
 
   
  switch (action.type) {

    
    case "Add":
      var item={
        id:action.payload.id,
        img:action.payload.image,
        qty:1,
        price:action.payload.price
    }
        
    
         

          const itemindex=state.cart.findIndex((e)=>e.id==action.payload.id)
          if(itemindex>=0){

             state.cart[itemindex].qty +=1
             return{
              ...state,
              cart:[...state.cart]
             }

          }else{

              return{

                  ...state,
                  cart:[...state.cart,item]
              }

          }

     case "delete":
     
      
     const deleteitem=state.cart.filter((e)=>e.id!==action.payload.id)
   return {
    ...state,
     cart:deleteitem
     };


     case "increase":

     const increaseqty=state.cart.findIndex((e)=>e.id==action.payload.id)
    
     state.cart[increaseqty].qty +=1
     return{
      ...state,
      cart:[...state.cart]
     }

     case "decrease":

     const decqty=state.cart.findIndex((e)=>e.id==action.payload.id)
     const deleteitemfromcart=state.cart.filter((e)=>e.id!==action.payload.id)
     

     state.cart[decqty].qty -=1
    
     if(state.cart[decqty].qty==0){

      
      return{
        
         ...state,
         cart:deleteitemfromcart
      }

   }else{
           
    return{
        ...state,
        cart:[...state.cart]
    }
  }

  case "wishlist":

  var item={
    id:action.payload.id,
    img:action.payload.img,
    //qty:1,
    price:action.payload.price
}
    
 const addtowishlist=state.wishlist.findIndex((item)=>item.id==action.payload.id)
 const removefromcart=state.cart.filter((item)=>item.id!==action.payload.id)


 if(addtowishlist>=0){
  return{
    ...state,
    wishlist:[...state.wishlist],
    cart:removefromcart
  }
 }else{
  return{
    ...state,
    wishlist:[...state.wishlist,item],
    cart:removefromcart
                                             
  }
 }

 case "movetocart":


 var item={
  id:action.payload.id,
  img:action.payload.img,
  qty:1,
  price:action.payload.price
}

 const movetocart=state.wishlist.filter((item)=>item.id!==action.payload.id)
 const addtocart=state.cart.findIndex((item)=>item.id==action.payload.id)
  
 if(addtocart>=0){
  return{
    ...state,
    wishlist:movetocart
  }
 }else{
  return{
      
    ...state,
    cart:[...state.cart,item],
    wishlist:movetocart
  } 
 }

   default:
     return state;
 }
};
