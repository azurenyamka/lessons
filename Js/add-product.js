console.log("Add");

const titleEl = document.querySelector(".productName");
const catEl = document.querySelector(".category");
const priceEl = document.querySelector(".productPrice");



const postData = async() =>{

    const data = await fetch('http://192.168.1.220:4040/product',{

        method: "POST",

        headers:{"Content-Type": "application/json"},

        body: JSON.stringify({

            title: titleEl.value,
            category: catEl.value,
            price: priceEl.value,
            imgURL: 'https://images.pexels.com/photos/14792098/pexels-photo-14792098.jpeg',
            isSpecial: true,
            days: 'Friday'

        })

    });

    console.log(titleEl.value);
    console.log(catEl.value);
    console.log(priceEl.value);

    
};