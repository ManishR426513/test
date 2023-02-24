//reducer code 

/*
const intitalstate = {
    cart: [],
    qtycart:[]
  };
  
  export const cartreducer = (state = intitalstate, action) => {
   
     
    switch (action.type) {
      case "Add":
      //  ...state,
      //  cart:[...state.cart,action.payload]

         

        const itemqty=state.cart.findIndex((e)=>e.id==action.payload.id)
        console.log(itemqty)
         if(itemqty>=0){
          
           return{
             ...state,
             cart:[ ...state.cart]
           }

         }else{

           return{
             ...state,
             cart:[...state.cart,action.payload]
           }
         }       
       
    


       case "delete":
       
        
       const deleteitem=state.cart.filter((e)=>e.id!==action.payload.id)
     return {
      ...state,
       cart:deleteitem
       };
 
     default:
       return state;
   }
 };
 
*/