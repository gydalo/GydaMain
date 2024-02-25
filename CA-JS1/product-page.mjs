

import { API_RAINY_DAYS } from "scripts/common/constants.mjs";
import { doFetch } from "scripts/utils/doFetch.mjs";

function createCart() {
    const cart = localStorage.getItem('cart');
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

function addToCart(product) {
    console.log('Add to cart', product);
    const cart = JSON.parse(localStorage.getItem('cart'));

    const itemIndex = cart.findIndex(function (currentProduct) {
        console.log(currentProduct);
        if (product.id === currentProduct.id) {
            return true;
        }
        return false;
    });

    if (itemIndex === -1) {
        cart.push({ ...product, quantity: 1 });
    } else {
        cart[itemIndex].quantity++;
    }

    console.log('itemIndex', itemIndex);


    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

async function main() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        const responseData = await doFetch(API_RAINY_DAYS);
        const products = responseData.data;

        const product = products.find(product => product.id === productId);

        if (product) {
            const productHtml = generateProductHtml(product);
            const productsDisplayContainer = document.getElementById('products-display');
            productsDisplayContainer.appendChild(productHtml);
        } else {
            console.error('Product not found');
        }
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}


function generateProductHtml(product) {
    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product-wrapper');

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const heading = document.createElement('h3');
    heading.textContent = product.title;
    
    const description = document.createElement('p'); 
    description.textContent = product.description;
    
    const price = document.createElement('div');
    price.textContent = 'Price: $' + product.price;

    const discountedPrice = document.createElement('div');
    if (product.onSale) {
        discountedPrice.textContent = 'On Sale: $' + product.discountedPrice;
        productContainer.appendChild(discountedPrice);
    }

    const productBuyButton = document.createElement('button');
    productBuyButton.textContent = 'Buy';
    productBuyButton.classList.add('product-buy-button');
    productBuyButton.addEventListener('click', () => {
        addToCart(product);
    });

    productContainer.append(heading, description, price, discountedPrice, productBuyButton);
    productWrapper.appendChild(productContainer);

    return productWrapper;
}


main();