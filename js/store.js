document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Function to update cart count in the header
    function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.innerText = cartItems.length;
        }
    }

    // Add event listener for 'Add to Cart' button
    let addToCartButton = document.getElementById('addToCart');
    if (addToCartButton) {
        console.log('Add to Cart button found');
        addToCartButton.addEventListener('click', function() {
            console.log('Add to Cart button clicked');
            // Gather product information from Shop.html
            let imageSrc = document.getElementById('modal-image').src;
            let title = document.getElementById('modal-title').innerText;
            let originalPriceElement = document.getElementById('original-price');
            let discountedPriceElement = document.getElementById('discounted-price');

            let price;
            if (discountedPriceElement.style.display !== 'none') {
                price = parseFloat(discountedPriceElement.innerText.replace('€', ''));
            } else {
                price = parseFloat(originalPriceElement.innerText.replace('€', ''));
            }

            let material = document.getElementById('material').value;
            let dimensions = document.getElementById('dimensions').options[document.getElementById('dimensions').selectedIndex].text;
            let quantity = parseInt(document.getElementById('quantity').value);
            let total = price * quantity;

            // Create object for the item
            let item = {
                image: imageSrc,
                title: title,
                price: price, // Store price as a number
                material: material,
                dimensions: dimensions,
                quantity: quantity,
                total: total.toFixed(2)  // Fixed to 2 decimal places
            };

            // Retrieve existing cart items from localStorage or initialize empty array
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            // Add new item to cartItems array
            cartItems.push(item);
            // Store updated cartItems array back into localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Update cart count in the header
            updateCartCount();

            // Update cart display
            displayCartItems();
        });
    } else {
        console.error("Element with ID 'addToCart' not found.");
    }

    // Function to display cart items in cart.html
    function displayCartItems() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartTableBody = document.querySelector('.cart-items');
        let emptyCartMessage = document.getElementById('empty-cart-message');
        if (!cartTableBody) return;

        cartTableBody.innerHTML = ''; // Clear existing items

        // Check if cart is empty
        if (cartItems.length === 0) {
            emptyCartMessage.style.display = 'block';
        } else {
            emptyCartMessage.style.display = 'none';

            // Loop through cartItems and create rows for each item
            cartItems.forEach(function(item, index) {
                let row = `
                <tr data-index="${index}">
                    <td class="product-image"><img class="cart-product-image" src="${item.image}" alt="Product Image"></td>
                    <td class="product-name">${item.title}</td>
                    <td class="product-price">€${item.price.toFixed(2)}</td>
                    <td class="product-material">${item.material}</td>
                    <td class="product-dimensions">${item.dimensions}</td>
                    <td class="product-quantity">
                        <input type="number" value="${item.quantity}" min="1" max="10" data-index="${index}" class="quantity-input">
                    </td>
                    <td class="product-total">€${item.total}</td>
                    <td class="product-remove"><button onclick="removeItem(${index})">Remove</button></td>
                </tr>
                `;
                cartTableBody.innerHTML += row;
            });
        }

        updateCartTotals();
    }

    // Function to update cart subtotal and total prices
    function updateCartTotals() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let subtotal = 0;
        cartItems.forEach(function(item) {
            subtotal += parseFloat(item.total);
        });

        // Update subtotal and total prices displayed on the page
        document.querySelector('.cart-subtotal-price').innerText = '€' + subtotal.toFixed(2);
        document.querySelector('.cart-total-price').innerText = '€' + subtotal.toFixed(2);
    }

    // Function to handle quantity changes
    function handleQuantityChange(event) {
        let index = event.target.getAttribute('data-index'); // Get index of the item
        let newQuantity = parseInt(event.target.value);
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Update quantity and total price of the item in the cartItems array
        cartItems[index].quantity = newQuantity;
        cartItems[index].total = (cartItems[index].price * newQuantity).toFixed(2); // Recalculate total based on new quantity

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems(); // Update cart display after quantity change
    }

    // Ensure .cart-items element exists before adding event listener
    let cartItemsElement = document.querySelector('.cart-items');
    if (cartItemsElement) {
        cartItemsElement.addEventListener('change', handleQuantityChange);
    } else {
        console.error("Element with class 'cart-items' not found.");
    }

    // Function to remove an item from cart
    window.removeItem = function(index) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Update cart count in the header
        updateCartCount();
        displayCartItems();
    };

    // Display cart items initially on page load
    displayCartItems();

    // Update cart count on page load
    updateCartCount();
});