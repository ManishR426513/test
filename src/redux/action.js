export const add = (item) => {
    return {
      type: "Add",
      payload: item
    };
  };


  export const del = (item) => {
    return {
      type: "delete",
      payload: item
    };
  };


  export const increaseqty = (item) => {
    return {
      type: "increase",
      payload: item
    };
  };

  export const decreaseqty = (item) => {
    return {
      type: "decrease",
      payload: item
    };
  };

  export const wishlist=(item)=>{
    return{
      type:'wishlist',
      payload:item
    }
  }

  export const mvcart=(item)=>{
    return{
      type:'movetocart',
      payload:item
    }
  }

  