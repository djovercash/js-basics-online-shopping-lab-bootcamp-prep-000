var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  var item = new Object({ [itemName]: itemPrice});
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
};

function viewCart() {
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`);
  } else {
    itemsAndPriceArr = [];
    var preString = `In your cart, you have `;
    for(var i = 0, l = cart.length; i < l; i++) {
      for(var list in cart[i]) {
        preString += `${list} at $${cart[i][list]}`;
        if (i!==cart.length-1) {
          preString+=", "
        } else {
          preString+="."
        };
      };
    } console.log(myString);
  };

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
