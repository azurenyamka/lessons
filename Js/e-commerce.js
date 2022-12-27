
let productList = document.querySelector(".productList");
let cartProducts = [];
let allProducts = [];
const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
    allProducts = data.products;//[{},{}]
    renderProducts(data.products); 
};

function renderProducts(products) {//30 shirheg itemtai array bgaa
     products.forEach((product, index)=> {
        productList.innerHTML += `<div class="col-12 col-md-3 col-lg-3">
        <div class="card" style="width: 18rem;">
            <img style="width:100%; height:200px;" class="card-img-top" src=${product.thumbnail} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text text-truncate">${product.description}</p>
              <button href="#" class="btn btn-primary" onclick="addProduct(${index})">+ Сагсруу хийх.</button>
            </div>
          </div>
    </div>`
    })
}
let cartBadge = document.querySelector(".cart-badge");
let addProduct = (index)=>{
    cartProducts.push(allProducts[index]);
    cartBadge.textContent = cartProducts.length;
}

getProducts();
const cartMenu = document.querySelector(".cartMenu");
const cart = document.querySelector(".cart");
let cartItemContainer = document.querySelector(".cart-item-container");
cart.addEventListener("click", ()=>{
    cartProducts.forEach(product=>{
        cartItemContainer.innerHTML += `
        <div>
            <div class="d-flex">
            <img class="" src="${product.thumbnail}" style="width:100%; height:100px"/>
            <h5>${product.title}</h5>
            </div>
        </div>`
    });
    cartMenu.style.right = 0;

})
