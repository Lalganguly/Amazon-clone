export const cart=[];

export function addToCart(product){
  let matchingItem=''

  cart.forEach((item)=>{
    if(product===item.productId){
      matchingItem=item
    }
  })
  if(matchingItem){
    matchingItem.quantity+=1;

  }else{
    cart.push({
      productId:product,
      quantity:1
    })
  }
  
  console.log(cart)
}
