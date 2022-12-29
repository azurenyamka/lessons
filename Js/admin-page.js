console.log("Admin");

const tBody = document.querySelector(".tBody");

let allProducts =[];

const getProducts = async () => {

    const response = await fetch('http://192.168.1.220:4040/product');

    const data = await response.json();    

    allProducts = data.product;

    displayProduct();
    
    console.log("Data:", data);
};
getProducts();


const displayProduct = () => {
    allProducts.forEach((product,i) => {
        const item = `
        <tr>
                    <th scope="row">${i+1}</th>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                    <td>${product.isSpecial}</td>
                    <td>
                        <button class="btn btn-primary"><i class="bi bi-pencil-square me-2"></i>Edit</button> 

                        <button class="btn btn-danger"><i class="bi bi-trash me-2"></i>DEL</button>
                    </td>
                </tr>
        
    `;
    tBody.innerHTML += item;
    });

};