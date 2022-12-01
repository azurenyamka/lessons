console.log("Хувьсагч")
let a = 100;
let b = 70;
let c = 89;
let d = 69;
let sum = 0;

if (a > 80) {
    sum = sum + a;//sum=189
}
if (b > 80) {
    sum = sum + b;
}
if (c > 80) {
    sum = sum + c;
}
if (d > 80) {
    sum = sum + d;
}
console.log ("1.sum",sum)

let e = 3;
let f = 7;
let g = 2;
let h = 4;
let urjver = 1;

if (e < 5) {
    urjver = urjver * e;//urjver=24
}
if (f < 5) {
    urjver = urjver * f;
}
if (g < 5) {
    urjver = urjver * g;
}
if (h < 5) {
    urjver = urjver * h;
}
console.log ("2.urjver",urjver)



console.log ("Assignment-1")
let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4";//true
let xi = 4 === "4";//false
console.log ("1.");
console.log (i);
console.log (iii);
console.log (ii);
console.log (iv);
console.log (v);
console.log (vi);
console.log (vii);
console.log (iix);
console.log (ix);
console.log (x);
console.log (xi);


console.log ("2.");
let one = 4 > 3 && 10 < 12;//1
let two = 4 > 3 && 10 > 12;//0
let three = 4 > 3 || 10 < 12;//1
let four = 4 > 3 || 10 > 12;//1
let five = !(4 > 3);//false
let six = !(4 < 3);//true
let eight = !(4 > 3 && 10 < 12);//0
let nine = !(4 > 3 && 10 > 12);//1
let ten = !(4 === "4");//true

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);


// console.log("3.");
// let myAge = ""
// let yourAge =""
// let nas = ""

// yourAge  = Number (prompt ("Та насаа оруулна уу."));
// myAge = Number (prompt("Та насаа оруулна уу."));
// if (myAge > yourAge){
//     console.log("Chi");
// }else{
//     console.log("Ta")
// }
// console.log("4.");
// let weekend = ""
// let weekday = ""
// let udur = ""
// // weekend = prompt("Ta udruu oruulna uu.")
// udur = prompt("Ta udruu oruulna uu.")
// if (udur == "monday" || udur == "thursday" || udur  == "wednesday" || udur == "tuesday" || udur  == "friday"){
//     console.log("ajliin udur");
// }else if( udur  == "saturday" || udur =="sunday"){
//     console.log("amraltiin udur");
// }
let hours = 40
let ratePerHour = 28