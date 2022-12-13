// Accessing objects

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих

let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]

let boy = 0;
let girl = 0;
function gender(){
    for(let i = 0; i < students.length; i++){
        if(students[i].gender === "male"){
        console.log(students[i]);
        boy++;
        }else{
            console.log(students[i]);
            girl++;
        }
    }
}

console.log(gender());
// let boy = 0;
// let girl = 0;
// for(let i = 0; i < students.length; i++){
//     if(students[i].gender === "male"){
//     console.log(students[i]);
//     boy++;
//     }else{
//         console.log(students[i]);
//         girl++;
//     }
// }
// console.log("boy:",boy);
// console.log("girl:",girl);