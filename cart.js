// cart.js

// Function to add an item to the cart
function addToCart(packageName) {
    // Get or create the cartItems array in localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the package to the cart
    cartItems.push(packageName);

    // Save the updated cartItems back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    // Get the cartItems from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Get the cartItems container element
    let cartItemsContainer = document.getElementById('cartItems');

    // Clear the existing content
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        cartItemsContainer.appendChild(listItem);
    });
}
