function getProducts() {

    const postNewCart = async (cart) => {
        const res = await fetch('https://intermarche-cart-scrapper.vercel.app/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cart)
        })
        if (!res.ok) {
          console.log('Error saving cart', res)
        }
      };

    const products = [];
    const cleanUpText = (text) => text.trim().replace(/\s+/g, ' ').replace(/\n/g, '');
    const productsNodes = document.querySelector('.cart__products').querySelectorAll('.productCard__content');
    productsNodes.forEach((productNode) => {
        const product = {
            name: cleanUpText(productNode.querySelector('.product--details__summary').querySelector('p').textContent),
            type: cleanUpText(productNode.querySelector('.product--details__title').textContent),
            packaging: cleanUpText(productNode.querySelector('.product--details__packaging').textContent),
            price: cleanUpText(productNode.querySelector('.product--price').textContent),
            quantity: cleanUpText(productNode.querySelector('.addToCart-button__quantity').textContent),
            promo: cleanUpText(productNode.querySelector('.product--footer__promoContainer').textContent),
            image: productNode.querySelector('.product--details__image').src,
        };
        products.push(product);
    });
    // if clipboard is available, copy the products to the clipboard
    if (navigator.clipboard) {
        // error document is not focused
        
        navigator.clipboard.writeText(JSON.stringify(products));
    }
    console.log(products);
}