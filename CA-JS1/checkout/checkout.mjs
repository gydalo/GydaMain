import { addToCart, decreaseQuantity, clearCart } from "../cart.mjs";

const purchaseButton = document.getElementById('clear-cart');
purchaseButton.addEventListener('click', () => {
    clearCart()
    displayCartItems();
});

function formatCurrency(amount) {
    return amount.toFixed(2);
}

function generateHtmlForProduct(product, index) {
    const productWrapper = document.createElement('div');

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;

    const productQuantity = document.createElement('div');
    productQuantity.textContent = 'Quantity: ' + product.quantity;

    const productPrice = document.createElement('div');
    productPrice.textContent = product.price;

    /*
    const productDiscountedPrice = document.createElement('div');
    if (product.onSale) {
        productDiscountedPrice.textContent = 'On sale: $' + product.discountedPrice;
        productWrapper.appendChild(productDiscountedPrice);
    }
*/

const productPriceTotal = document.createElement('div');
    if (!product.onSale) {
        productPriceTotal.textContent = 'Total: $' + formatCurrency(product.price * product.quantity);
    } else {
        productPriceTotal.textContent = 'Total: $' + formatCurrency(product.discountedPrice * product.quantity);
    }

    //const productDiscountedPrice = document.createElement('div');
    //productDiscountedPrice.textContent = product.discountedPrice;

    const productDescription = document.createElement('div');
    productDescription.textContent = product.description;

/*
    const productPriceTotal = document.createElement('div');
    productPriceTotal.textContent = 'Total: ' + formatCurrency(product.price + product.discountedPrice * product.quantity); */

    const quantityAdjusmentContainer = document.createElement('div');

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => {
        console.log('Increase the total');
        addToCart(product);
        displayCartItems();
    });

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => {
        console.log('Decrease the total');
        decreaseQuantity(product);
        displayCartItems();
    });

    
    const removeAllButton = document.createElement('button');
    removeAllButton.textContent = 'Remove all';
    removeAllButton.addEventListener('click', () => {
        removeAllFromCart(index);
    }); 

    productWrapper.append(productTitle, productQuantity, productDescription, productPrice, productPriceTotal, increaseButton, decreaseButton, removeAllButton);
    return productWrapper;

}

function displayCartItems() {
    const displayContainer = document.getElementById('cart-items-display');
    displayContainer.textContent = '';
    const cart = JSON.parse(localStorage.getItem('cart'));

    cart.forEach(function (currentItem, index) {
        const itemHtml = generateHtmlForProduct(currentItem, index);
        displayContainer.appendChild(itemHtml);
    });
}


function removeAllFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    const displayContainer = document.getElementById('cart-items-display');
    displayContainer.innerHTML = '';
    displayCartItems();
} 


function main() {
    displayCartItems();
}

main();