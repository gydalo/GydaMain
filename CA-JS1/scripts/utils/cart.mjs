
function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart;
}

export function createCart() {
    const cart = localStorage.getItem('cart');
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

export function addToCart(product) {
    const cart = getCart();
    console.log('Add to cart', product);

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

export function decreaseQuantity(product) {
    const cart = getCart();
    const productIdToRemove = product.id;
    console.log('Decrease or remove product');
    console.log('Game id to remove', productIdToRemove);
    console.log(product);

    const idInCart = cart.findIndex((currentProduct) => {
        if (currentProduct.id === productIdToRemove) {
            return true;
        }
    });

    if (cart[idInCart].quantity > 1) {
    cart[idInCart].quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        console.log('Delete me');
        const newCart = cart.filter((currentItem, index) => {
            if (idInCart === index) {
                return false;
            }
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

}

export function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    console.log('Cart has been cleared');
}
