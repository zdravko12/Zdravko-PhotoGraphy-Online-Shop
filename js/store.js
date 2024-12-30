document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Function to update cart count in the header
    function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.innerText = cartItems.reduce((total, item) => total + item.quantity, 0);
        }
    }

    // Function to check cart status and update the checkout button
    function checkCartStatus() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let checkoutButton = document.getElementById('checkout-btn');
        let emptyCartMessage = document.getElementById('empty-cart-message');
        let disabledIcon = document.getElementById('disabled-icon');
        let checkoutLink = document.getElementById('checkout-link');
        

        if (checkoutButton) {
            if (cartItems.length === 0) {
                checkoutButton.disabled = true;
                emptyCartMessage.style.display = 'block';
                disabledIcon.style.display = 'inline-block';
                checkoutLink.removeAttribute('href');
            } else {
                checkoutButton.disabled = false;
                emptyCartMessage.style.display = 'none';
                disabledIcon.style.display = 'none';
                checkoutLink.setAttribute('href', '/Html-Page/checkout.html');
            }
        } else {
            console.error("Element with ID 'checkout-btn' not found.");
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
                price: price,
                material: material,
                dimensions: dimensions,
                quantity: quantity,
                total: total.toFixed(2)
            };

            // Retrieve existing cart items from localStorage or initialize empty array
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Check if the product is already in the cart
            let existingItemIndex = cartItems.findIndex(cartItem => 
                cartItem.title === item.title &&
                cartItem.material === item.material &&
                cartItem.dimensions === item.dimensions
            );

            if (existingItemIndex !== -1) {
                // Update quantity and total for the existing item
                cartItems[existingItemIndex].quantity += quantity;
                cartItems[existingItemIndex].total = (cartItems[existingItemIndex].price * cartItems[existingItemIndex].quantity).toFixed(2);
            } else {
                // Add new item to cartItems array
                cartItems.push(item);
            }

            // Store updated cartItems array back into localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Update cart count in the header
            updateCartCount();

            // Update cart display
            displayCartItems();

            // Check cart status to update checkout button
            checkCartStatus();

            // Temporarily show a message that the item has been added to the cart
            addToCartButton.innerHTML = "<span>&#10003;</span> Item added";
            addToCartButton.classList.add("added-to-cart");

            // Optionally reset the button's text and opacity after a few seconds
            setTimeout(function() {
                addToCartButton.innerHTML = "<span>Add to Cart</span>";
                addToCartButton.classList.remove("added-to-cart");
                  window.location.href = '/Html-Page/cart.html'; // Redirect to cart.html
            }, 2300);
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
                    <tr data-index="${index}" class="cart-product-row">
                        <td class="product-image"><a href="##"><img class="cart-product-image" src="${item.image}" alt="Product Image"></a></td>
                        <td class="product-name">${item.title}</td>
                        <td class="product-price">€${item.price.toFixed(2)}</td>
                        <td class="product-material">${item.material}</td>
                        <td class="product-dimensions">${item.dimensions}</td>
                        <td class="product-quantity">
                            <input type="number" value="${item.quantity}" min="1" max="10" data-index="${index}" class="quantity-input">
                        </td>
                        <td class="product-total">€${item.total}</td>
                        <td class="product-remove"><button class="remove-product-button" data-index="${index}" onclick="removeItem(${index})">Remove</button></td>
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
        // Check cart status to update checkout button
        checkCartStatus();
    };

    // Display cart items initially on page load
    displayCartItems();

    // Update cart count on page load
    updateCartCount();

    // Check cart status on page load
    checkCartStatus();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    function displayCheckoutItems() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let checkoutTableBody = document.querySelector('.checkout-items');
        let emptyCheckoutMessage = document.getElementById('empty-checkout-message');
        let couponInput = document.getElementById('c_code');
        let applyCouponButton = document.getElementById('button-addon2');
        
        if (!checkoutTableBody) return;

        checkoutTableBody.innerHTML = ''; // Clear existing items

        if (cartItems.length === 0) {
            emptyCheckoutMessage.style.display = 'block';
        } else {
            emptyCheckoutMessage.style.display = 'none';

            let subtotal = 0;

            cartItems.forEach(function(item, index) {
                let itemTotal = (item.price * item.quantity).toFixed(2);
                subtotal += parseFloat(itemTotal);

                let row = `
                <tr data-index="${index}">
                    <td>${item.title}</td>
                    <td class="product-image"><img class="cart-product-image" src="${item.image}" alt="Product Image"></td>
                    <td>${item.material}</td>
                    <td><strong class="mx-2">x</strong>${item.quantity}</td>
                    <td>${item.dimensions}</td>
                    <td class="item-price">€${itemTotal}</td>
                </tr>
                `;
                checkoutTableBody.innerHTML += row;
            });

            let formattedSubtotal = subtotal.toFixed(2);
            let subtotalRow = `
            <tr>
                <td class="text-black font-weight-bold TextColor" colspan="5"><strong>Cart Subtotal</strong></td>
                <td class="text-black TextColor">€${formattedSubtotal}</td>
            </tr>
            <tr>
                <td class="text-black font-weight-bold TextColor" colspan="5"><strong>Order Total</strong></td>
                <td class="text-black font-weight-bold TextColor" id="order-total">€${formattedSubtotal}</td>
            </tr>
            `;
            checkoutTableBody.innerHTML += subtotalRow;

            // Apply coupon functionality
            const couponInput = document.getElementById('c_code');
const applyCouponButton = document.getElementById('button-addon2');
const disabledIcon = document.getElementById('disabled-icon');

// Function to handle enabling/disabling the Apply button
function handleButtonState() {
    let couponCode = couponInput.value.trim();
    
    // If the input is empty, disable the button and show the icon
    if (couponCode === '') {
        applyCouponButton.disabled = true;
        applyCouponButton.style.cursor = 'not-allowed';
        disabledIcon.style.display = 'inline';
    } else {
        applyCouponButton.disabled = false;
        applyCouponButton.style.cursor = 'pointer';
        disabledIcon.style.display = 'none';
    }
}

// Event listener for when the user types into the input field
couponInput.addEventListener('input', function() {
    handleButtonState();
});

// Ensure the input field is empty and button state is correct on page load
window.addEventListener('load', function() {
    couponInput.value = ''; // Clear the input field
    handleButtonState(); // Apply the correct button state on page load
});

// Apply coupon functionality
applyCouponButton.addEventListener('click', function() {
    let couponCode = couponInput.value.trim();
    console.log('Coupon code entered:', couponCode); // Debugging message

    if (couponCode === '1234567') { // Check for a valid coupon code
        let discount = 0.10;
        let discountAmount = subtotal * discount;
        let discountedTotal = subtotal - discountAmount;

        // Update order total and show alert
        document.getElementById('order-total').textContent = `€${discountedTotal.toFixed(2)}`;
        alert(`Coupon applied! 10% You saved €${discountAmount.toFixed(2)}.`);
    } else {
        alert('Invalid coupon code');
    }
});
        }
    }

    displayCheckoutItems();
});
