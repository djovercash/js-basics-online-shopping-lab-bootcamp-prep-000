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
    var cartCount = [];
    var string = `In your cart, you have `;
    for(var i = 0; i < cart.length; i++) {
      cartCount.push(`${string} ${itemName} at ${itemPrice}`);
      if (i === 1) {
        console.log(`${cartCount}.`);
      } else if (i === 2) {
        console.log(`${cartCount} and ${cartCount + 1}.`);
      };
    };
    return viewCart;
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
