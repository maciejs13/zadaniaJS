const products = [
    { name: "Laptop", price: 1500, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "T-shirt", price: 20, category: "Clothing" },
  ];
  
  const filterProducts = (products, { category, minPrice = 0, maxPrice = Infinity }) => {
    return products
      .filter(product => 
        (!category || product.category === category) && 
        product.price >= minPrice && 
        product.price <= maxPrice
      );
  };
  
  const displayProducts = products => {
    products.forEach(({ name, price, category }) => {
      console.log(`Produkt: ${name}, Cena: $${price}, Kategoria: ${category}`);
    });
  };
  
  const filters = { category: "Electronics", minPrice: 500, maxPrice: 1000 };
  const filteredProducts = filterProducts(products, filters);
  
  console.log("Produkty spełniające kryteria filtrowania:");
  displayProducts(filteredProducts);
  