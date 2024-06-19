document.getElementById('search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value;
    fetchProducts(searchTerm);
  });
  
  function fetchProducts(searchTerm = '') {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => renderProducts(data.products))
      .catch(error => console.error('Error:', error));
  }
  
  function renderProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; 
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
      `;
      container.appendChild(card);
    });
  }
  
 
  fetchProducts();
  