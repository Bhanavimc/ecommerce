let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price}`;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = `$${total}`;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCart();
}
