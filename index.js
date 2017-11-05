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
    var string = `In your cart, you have `;
    if (cart.length === 1) {
      string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    } else if (cart.length === 2) {
      string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
    } else {
      for (var i = 0; i < cart.length; i++) {
        var text;
        if (i === cart.length - 2) {
          text = ", and ";
        } else if (i === cart.length - 1) {
          text = "";
        } else {
          text = ", ";
        }
        string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` + text + `${i === cart.length - 1 ? '.' : ''}`;
    }
  }
  return console.log(string);
};


function total() {
  var sum = 0;
  for (var i = 0; i < item.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  };
  return sum;
};

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
