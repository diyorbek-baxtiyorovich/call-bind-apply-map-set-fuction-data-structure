// const obj = {
//     dats: "name",
//     my: "qanday dir qiymatlar olishda",
//     age: 22
// }

// this qiymatlarini olishda bajarish qiymatlarini qandaydir funsiya orqali bajarishimizda bizga window yani global qiymatlar orqali murojat qilish.


// function Myfar(){
//     console.log(this)
// }

// Myfar();

// this qiymatini yana ko'rsatish bilan ham ishlatar ekanmiz.

// function Myname(name){
//     this.name = name
// }

// const person = new Myname("Diyor")
// console.log(person)

// let user = {
//     name: "Kenzo",
//     age : 32,
//     great: function() {
//     console.log(this.name)
//     }
// };

// user.great();


// const actions = {
//     mySup(garbek) {
//         console.log(yiban + "my name is " + this.name)
//     },
//     mySab() {
//         console.log("my age is " + this.age)
//     }
// };

// const users = [
//     {name: "Kenzo", age: 33},
//     {name: "Mkadir", age : 100}
// ];

// users.forEach((user => {
//     actions.mySup.call(user, "hey what's up ")
//     actions.mySab.call(user)
// }));

// const a = actions.mySup.call(users[0])
// console.log(a)





// Berilgan data strukturalari orqali bajarilishi mimkun bulga qiymatlarni bajarishimiz mumkin bo'ladi.

// let delayedPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved after 2 seconds');
//     }, 2000);
// });

// delayedPromise
//     .then((message) => {
//         console.log(message); // 'Promise resolved after 2 seconds'
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/* Obektlarda bajarilishi mumkin yani ularni bog'lash va qo'shish kabi qiymatlarni bajarisha key orqali yoki tuli xildagi 
 structuralani bajarishimiz mumkin. */


let comit = new Map();

let user1 = {name: "Jenif"};
let user2 = {name: "Jony"};

comit.set(user1, {age: 20, email: "jineg@gmail.com"})
comit.set(user2, {age: 22, email: "jogrg@gmail.com"})

console.log(comit);
console.log(comit.get(user1));


// ------------------------

// Berilgan objectlardan noyob qiymaylarni tanlashda bizga set orqali murojat qilgan holatda aniqlashimiz mumkin buladi.

/*
let addition  = new Set();

addition.add("alisa");
addition.add("Jony");
addition.add("Jony");

addition.forEach(additionte => {
    console.log(additionte);
})


console.log(addition.size)
*/

// Weakmap orqali umumiy bajaraladigan ish bir xil  map bilan faqat "garbeg collection" ishlash imkonini yaratishimiz mumkun bo'ladi.

// let catchet = new WeakMap();

// function funyTy(user){
//     if(!catchet.has(user)){
//         let result = preExpensiveTime(user);
//         catchet.set(user, result);
//         return result
//     }
//     return catchet.get(user)
// }

// function preExpensiveTime(user){
//     // Murakkab xisoblash tizimi

//     return {meney: "veryExpensive"}
// }

// let user = {name: "Alise"};

// console.log(funyTy(user));

// console.log(catchet.has(user));




