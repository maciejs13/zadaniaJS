class Cart {
    constructor() {
      this.products = [];
    }
  
    addProduct(name, price, quantity = 1) {
      const existingProduct = this.products.find(product => product.name === name);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        this.products = [...this.products, { name, price, quantity }];
      }
    }
  
    removeProduct(name) {
      this.products = this.products.filter(product => product.name !== name);
    }
  
    showCart() {
      if (this.products.length === 0) {
        console.log("Koszyk jest pusty.");
      } else {
        console.log("Zawartość koszyka:");
        this.products.forEach(({ name, price, quantity }) => {
          console.log(`Produkt: ${name}, Cena: $${price}, Ilość: ${quantity}`);
        });
        const total = this.products.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
        console.log(`Łączna kwota: $${total.toFixed(2)}`);
      }
    }
  }
  
  const myCart = new Cart();
  
  myCart.addProduct("Laptop", 1500, 1);
  myCart.addProduct("Phone", 800, 2);
  myCart.addProduct("Laptop", 1500, 1);
  myCart.showCart();
  
  myCart.removeProduct("Phone");
  myCart.showCart();
  