const addValue = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const removeValue = document.querySelectorAll(".product__quantity-control_dec");
const value = document.querySelectorAll(".product__quantity-value")
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");
const product = document.getElementsByClassName("product");

addValue.forEach((item, index) => {
    item.addEventListener("click", () => {
        value[index].textContent++;
    })
    
})

removeValue.forEach((item, index) => {
    item.addEventListener("click", () => {
        value[index].textContent--;
        if (value[index].textContent <= 0){
            return value[index].textContent = 0;
        }
    })
    
})


productAdd.forEach((item, index) => {
    item.addEventListener("click", () => {
       
            
            for (let i = 0; i < cartProducts.children.length; i++) {
                if (cartProducts.children[i].dataset.id === product[index].dataset.id) {
                    return cartProducts.children[i].querySelector('.cart__product-count').textContent = Number(cartProducts.children[i].querySelector('.cart__product-count').textContent) + Number(value[index].textContent);
                }
            }

            cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product[index].dataset.id}">
                <img class="cart__product-image" src="${product[index].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${value[index].textContent}</div>
            </div>
            `); 
            
            
    })
})

