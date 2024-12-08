export let cart=[{
    pId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
},{
    pId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
},{
  pId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  quantity:2
}];

export function cartAddition(pId,quant){
    let matchingfound;
    cart.forEach((cartItem)=>{
      if (cartItem.productId===pId){
        matchingfound=cartItem;
        
      }
      })
      if (matchingfound){
        matchingfound.quantity+=quant;
        
      }else{
        cart.push({
          productId:pId,
          quantity:quant,
          
        });
        
      }
      console.log(cart);
  
  };

export function removerfromcart(deleteid){
  let newcart=[];
  cart.forEach((c)=>{
    if (c.pId!=deleteid){
      newcart.push(c);
    }
  })
  cart=newcart;

};
export function removefromhtml(deleteid){
  document.querySelector(`.js-cart-item-container-${deleteid}`).remove();
  
}
