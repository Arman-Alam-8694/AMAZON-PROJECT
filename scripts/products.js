import { currencyconverter } from '../util/money.js';

export const product=[
    {
      id:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
      image:"images/products/athletic-cotton-socks-6-pairs.jpg",
      rating:{
          stars:"images/ratings/rating-45.png",
          quantity:56
      },
      prices:799
},
{
    id:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    name:' Adults Plain Cotton T-Shirt - 2 Pack',
    image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    rating:{
        stars:"images/ratings/rating-45.png",
        quantity:87
    },
    prices:1090
},
{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    name:'Intermediate Size Basketball',
        image:"images/products/intermediate-composite-basketball.jpg",
        rating:{
            stars:"images/ratings/rating-40.png",
            quantity:127
        },
        prices:2095
}];
// console.log(product);
const productsgrid=document.querySelector('.products-grid');



let innertext="";
product.forEach((products)=>{
    innertext+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${products.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src=${products.rating.stars}>
            <div class="product-rating-count link-primary">
            ${products.rating.quantity}
            </div>
          </div>

          <div class="product-price">
            $${currencyconverter(products.prices)}
          </div>

          <div class="product-quantity-container">
            <select class="product-quantity-${products.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${products.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button js-add-cart button-primary" data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>`;
    
});
// console.log(innertext);
productsgrid.innerHTML=innertext;