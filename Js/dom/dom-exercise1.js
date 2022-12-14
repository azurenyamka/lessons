//Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх 
// const arhangai = document.getElementById("aimag-101");
// console.log("эхний li элемент:",arhangai);

// Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх
// const ulaanbaatar = document.getElementById("aimag-522");
// console.log("сүүлийн li элемент:",ulaanbaatar);

// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх
// const sukhbaatar = document.getElementById("aimag-315");
// console.log("Сүхбаатар аймaг:",sukhbaatar);

// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)

// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.
// document.getElementsByClassName("hangain-bus").style.backgroundColor = "green"
document.querySelectorAll(".hangain-bus").style.backgroundColor = "green"
