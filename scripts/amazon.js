import {cart,cartAddition} from './cart.js';
import {product} from './products.js';
let added=false;
const iconVisibility = {};

function cartQuantityUpdate(){
  let totalquantity=0;
    cart.forEach((cartItem)=>{
      totalquantity+=cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML=totalquantity;

};
const buttons=document.querySelectorAll('.js-add-cart');

buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    
    const pId=button.dataset.productId;
    
    let quant=Number(document.querySelector(`.product-quantity-${pId}`).value);
    
    const icon=document.querySelector(`.js-added-${pId}`);
    
    
    if (!iconVisibility[pId]) {
      setTimeout(() => {
        icon.classList.add('js-added');
        iconVisibility[pId] = true; // Mark as visible
      }, 100);
    } else {
      icon.classList.remove('js-added');
      iconVisibility[pId] = false; // Mark as not visible
    }
    cartAddition(pId,quant);
    cartQuantityUpdate();
  });
});