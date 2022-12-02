// 10 хүртэлх натурал тоог хэвлэх программ бич
// let count = 1;
// while(count <= 10){
//     console.log(count);
//     count += 1;
// } 


// 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
// let count = 0;

// while (count <= 10){
//     if(count % 2 !== 0) {
//         console.log(count);
//     }
//     count += 1;
// }


// 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
// let count = 0;
// while (count <= 10) {
//     console.log(count);
//     count += 2;
// }


// 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
// let counter = 0;
// let sum = 0;
//  while (counter <= 100){
//     sum = sum + counter ;
//     counter += 1;
// }
// console.log (sum);

// N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
// let counter = 0;
// let sum = 0;
// let N = "Та дурын тоогоо оруулна уу."

// N = prompt("Та дурын тоогоо оруулна уу.")
// while (counter <= N){
//     console.log (counter);
//     sum += counter ;
//     counter++;
// }
// console.log (sum)


// Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
let random = parseInt (prompt("Та дурын тоогоо оруулна уу."));
let isPrime = true;

if (random === 2){
    console.log(`${random} бол анхны тоо мөн.`);
} else {
    let i = 2;
    while (i < random) {
        if (random % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    if  (isPrime) {
        console.log(`${random} бол анхны тоо мөн.`);
    } else {
        console.log(`${random} бол анхны тоо биш.`)
    }
}