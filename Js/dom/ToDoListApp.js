// console.log("Event");

// document.addEventListener("keypress",(event)=>{
//     console.log("Key daragdlaa");
//     if(event.key === "Enter") {
//         console.log("Enter daragdlaa");
//     }
// });
const header = document.getElementsByTagName("header")[0];
const cap = `
<div class="cap">
    <h1>To Do List App<h1/>
    <i></i>                    <i>    1 task үлдлээ!</i>
</div>` 
;
header.innerHTML = cap;
const main = document.getElementsByTagName("main");
const container = `
<div class="list">
    <input 
</div>`


let dateI = document.getElementsByTagName("i")[0];
let day = 0;
let month = 0;
let year = 0;

 
const increment = () => {
    let dt = new Date();
    console.log(dt.toDateString())
    day = dt.getDate();
    month = dt.getMonth() + 1;
    year = dt.getFullYear();
    dateI.textContent = `Он сар өдөр: ${year}-${month}-${day}`;
};
increment()


