console.log("Experiment");

// const colors = ["red", "blue", "green"];
// let colorIndex = 0;

// const body = document.getElementsByTagName("body")[0];

// const change = () => {
//     // if(colorIndex >= 3) {
//     //     colorIndex = 0;
//     // }
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     body.style = `background-color: ${colors[colorIndex]}`;
//     colorIndex++;
//     document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${r},${g},${b})`;
// };
// mybtn.addEventListener("click", change);

const change = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let e = Math.floor(Math.random() * 250);
    let f = Math.floor(Math.random() * 250);
    let j = Math.floor(Math.random() * 250);

    document.getElementsByClassName("color")[0].style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementsByClassName("color")[1].style.backgroundColor = `rgb(${e},${f},${j})`;
}
mybtn.addEventListener("click", change);
secondBtn.addEventListener("click",change);
thirdBtn.addEventListener("click",change);