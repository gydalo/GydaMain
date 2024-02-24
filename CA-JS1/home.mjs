// Make it possible to view the products on a seperate page
// Make it possible to change categories (men, women)
//order confirmation


import { API_RAINY_DAYS } from "./scripts/common/constants.mjs";
import { doFetch } from "./scripts/utils/doFetch.mjs";
import { addToCart, createCart } from "./scripts/utils/cart.mjs";

const femaleButton = document.getElementById('female');
const maleButton = document.getElementById('male');
const clearButton = document.getElementById('clear');

let chosenGender = '';

femaleButton.addEventListener('click', () => {
    chosenGender = 'Female';
    renderHomePage();
});

maleButton.addEventListener('click', () => {
    chosenGender = 'Male';
    renderHomePage();
});

clearButton.addEventListener('click', () => {
    chosenGender = '';
    renderHomePage();
});


function generateProductHtml(product) {

    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product-wrapper');

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productImage = document.createElement('img');
    productImage.url = product.image;
    productImage.alt = product.title;

    const heading = document.createElement('h3');
    heading.textContent = product.title;

    const productPriceContainer = document.createElement('div');

    const productPrice = document.createElement('div');
    productPrice.textContent = product.price;

    const productDiscountedPrice = document.createElement('div');
    if (product.onSale) {
        productDiscountedPrice.textContent = 'On Sale: $' + product.discountedPrice;
        productPriceContainer.appendChild(productDiscountedPrice);
    }

    const productPageButton = document.createElement('button');
    productPageButton.textContent = 'View Details';
    productPageButton.classList.add('product-page-button');
    productPageButton.addEventListener('click', () => {
        productPage(product.id);
    });

    const productBuyButton = document.createElement('button');
    productBuyButton.textContent = 'Buy';
    productBuyButton.classList.add('product-buy-button');
    productBuyButton.addEventListener('click', () => {
        addToCart(product);
    });


    productPriceContainer.append(productPrice, productDiscountedPrice);
    productContainer.append(productImage, heading, productPriceContainer, productBuyButton, productPageButton);
    productWrapper.appendChild(productContainer);

    return productWrapper;

}

function productPage(productId) {
    window.location.href = `product-page.html?id=${productId}`;
}

function displayProducts(products) {
    const productsDisplayContainer = document.getElementById('products-display');
    productsDisplayContainer.textContent = '';
    products
    .filter((product) => {
        if (product.gender === chosenGender || chosenGender === '') {
            return true;
        }
    })
    .forEach((product) => {
        const productHtml = generateProductHtml(product);
       productsDisplayContainer.appendChild(productHtml);
        });


    }

    async function renderHomePage() {
        const responseData = await doFetch(API_RAINY_DAYS);
        const products = responseData.data;
        console.log(products);
        displayProducts(products);
    }
    

async function main() {
    createCart();
    await renderHomePage();
}

main();





