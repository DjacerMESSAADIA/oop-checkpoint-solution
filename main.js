class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    const index = this.items.findIndex((item) => item.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  displayCart() {
    console.log("Shopping Cart:");
    this.items.forEach((item) => {
      console.log(
        `${item.product.name} - Quantity: ${item.quantity} - Total: $${item
          .getTotalPrice()
          .toFixed(2)}`
      );
    });
    console.log(`Total Items: ${this.getTotalItems()}`);
    console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Mouse", 29.99);
const product3 = new Product(3, "Keyboard", 59.99);
const product4 = new Product(4, "Speaker", 99.99);

const cart = new ShoppingCart();

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);
cart.addItem(product4, 1);

console.log("Initial cart:");
cart.displayCart();

cart.removeItem(2);

console.log("\nCart after removing item:");
cart.displayCart();
