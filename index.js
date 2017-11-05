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
  }
  var itemsAndPrice = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      console.log(`In your cart, you have ${itemName} at ${itemPrice}`);
    } else if (cart.length === 2) {
      console.log(`In your cart, you have ${itemName} at ${itemPrice} and ${itemName} at ${itemPrice}`);
    } else 
      console.log();
    };
  };
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
