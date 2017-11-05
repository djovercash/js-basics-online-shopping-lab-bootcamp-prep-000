var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  var item = new Object({ itemName: itemPrice});
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
};

function viewCart() {
  if (!cart.length) {
    return `Your shopping cart is empty.`
  };
  var itemsAndPrice = [];
  for (var i = 0; i < cart.length; i++) {
    itemsAndPrice.push(`${itemName} at ${itemPrice}`);
  }
  return `In your cart, you have ${itemsAndPrice.join(", ")}`;
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
