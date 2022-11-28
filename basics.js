// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let arr = [];
// for (let i = 0; i < 100; i++) {
//  arr.push(i);
// }
// let arr = [];
// for (let i = 0; i < 100; i = i + 2) {
//     arr.push(i);
// }
// console.log(arr)
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//  arrOfArrays.push([]);
//  for (let j = 0; j < 22; j++) {
//  arrOfArrays[i].push(j);
//  }
// }
// console.table(arrOfArrays)
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  console.log(names[i]);
// }
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  names[i] = "hello " + names[i];
// }
// console.log(names)
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
// for (let i = 0; i < names.length; i ++){ 
//  if(names[i].startsWith("M")){
//  delete names[i];
//  continue;
//  }
//  names[i] = "hello " + names[i]; 
// } 
// console.log(names);
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
// for (let i = 0; i < names.length; i++){ 
//  names.push("...")
// }
// console.log(names)
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names){
//  console.log(name);
// }
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//    };
//    for (let prop in car){
//     console.log(car[prop]);
//    }
//    for (let prop in car){
//     console.log(prop);
//    }
// let cars = [
//    {
//    model: "Golf",
//    make: "Volkswagen",
//    year: 1999,
//    color: "black",
//    },
//    {
//    model: "Picanto",
//    make: "Kia",
//    year: 2020,
//    color: "red",
//    },
//    {
//    model: "Peugeot",
//    make: "208",
//    year: 2021,
//    color: "black",
//    },
//    {
//    model: "Fiat",
//    make: "Punto",
//    year: 2020,
//    color: "black",
//    }
//   ];
//   for (let i = 0; i < cars.length; i++) {
//    if (cars[i].year >= 2020) {
//    if (cars[i].color === "black") {
//    console.log("I have found my new car:", cars[i]);
//    break;
//    }
//    }
//   }
// for (let i = 0; i < 10; i++) {
//    console.log(i);
//    if (i === 4) {
//    break;
//    }
//   }
let superLongArray = [1, 2]
// while (true) {
//    if (superLongArray[0] != 42 && superLongArray.length > 0) {
//    superLongArray.shift();
//    } else {
//    console.log("Found 42!");
//    break;
//    }
//   }
// while (superLongArray.length > 0 && notFound) {
//    if (superLongArray[0] != 42) {
//    superLongArray.shift();
//    } else {
//    console.log("Found 42!");
//    notFound = false;
//    }
//   }
// let i = 1;
// while (i < 50) {
//  if (i % 2 === 0){
// //  continue;
// //  console.log(i);
//  i++;
//  }
// }
// let i = 1;
// while (i < 50) {
//  i++;
//  if ((i-1) % 2 === 0){
//  continue;
//  }
//  console.log(i-1);
// }
// // let arrKeys = Object.keys(car);
// // console.log(arrKeys);
// for (let key of Object.keys(car)) {
//     // console.log(key)
//     for (const a of Object.values(car)) {
//         console.log(a,key)
//     }
// }
//     let car = {
//         model: "Golf",
//         make: "Volkswagen",
//         year: 1999,
//         color: "black",
//     };
//     let arrKeys = Object.keys(car);
// for(let i = 0; i < arrKeys.length; i++) {
//  console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// }
// console.log(arrKeys)
// let car = {
//     make : "Toyota",
//     model : "Corolla",
//     year : 2003,
//     color : "Black"
// }
// let carKey = Object.keys(car)
// for (let i = 0; i < carKey.length; i++) {
//     console.log(carKey[i]+": "+ car[carKey[i]])
// }
// let arrEntries = Object.entries(car);
// console.log(arrEntries);
// for (const [key, value] of Object.entries(car)) {
//     console.log(key, ":", value);
//    }
// for ( const [key,value] of Object.entries(car)){
//     console.log(key, ": ", value)
// }
// for(let i = 0 ; i<10 ; i++){
//     console.log(i);
//     if (i === 4) {
//         break
//     }
// }
// let cars = [
//     {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     },
//     {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//     },
//     {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
// ];
// for(i = 0 ; i<cars.length ; i++){
//     if (cars[i].year >=2020) {
//         if(cars[i].color === "black"){
//          console.log(cars[i])
//         //  continue
//         }
//     }
// }
// let i = 1;
// while (i < 50) {
//  if (i % 2 === 0){
//      continue;
// }
//  console.log(i);
//  i++;
// }
// console.log("bilal")
// let i = 1;
// while (i <= 50) {
//  i++;
//  if ((i-1) % 2 === 1){
//  continue;
//  }
//  console.log(i-1);
// }

// for (let i = 1; i < 50; i = i + 2) {
//     console.log(i);
//    }
let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];
// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;

//  for (let j = 0; j < groups[i].length; j++) {
//     if(groups[i][j].startsWith("M")){
//     matches++;
//     } else {
//     continue;
//     }
//     if (matches === 2){
//     console.log("Found a group with two names starting with an M:");
//     console.log(groups[i]);
//     break;
//     }
//   }
// }
// for (let group of groups){
//     for (let member of group){
//     if (member.startsWith("M")){
//     console.log("found one starting with M:", member);
//     break
//     }
// }
// }   
// outer:
// for (let group of groups) {
//  inner:
//  for (let member of group) {
//  if (member.startsWith("M")) {
//  console.log("found one starting with M:", member);
//  break outer;
//  }
//  }
// }
// let step = 3;
// for (let i = 0; i < 1000; i = i + step) {
//  if (i > 10) {
//  break;
//  }
//  console.log(i);
// }
// // alert("bilal")
// const myArray = [1,5,7];
// for(el in myArray){
//  console.log(Number(el));
//  el = Number(el) + 5;
//  console.log(el);
// }
// console.log(myArray);
// let func = ()=>{
//     let pets = ["Dogs","Cat","Fly","Bug","Ox"];
//     pets = pets.slice(2,4);
//     return pets[1]
// }
// console.log(func())
// console.log(((x,y)=>x+y)(3,4))
// let a = "55" + 5-5;
// console.log(a)
// var a = 5;
// var c = function (b) {
//     a +=3;
//     return b+a;
// }(2);
// console.log(c)
// let a= "sat"
// switch (a) {
//     case "sat":
//     console.log("1");
//     case "sun":
//     console.log("2");
//     case "Fri":
//     console.log("3")
//     default:
//      console.log("shot")
// }

// let z= (x,y)=>x>y?3:4
// console.log(z(5,6))
function job() {
    return new Promise(function(a,b){
        b ();
    })
}
let promise = job();
promise.then(function(){
    console.log("a")
})
promise.then(function(){
    console.log("a")
})
promise.catch(function(){
    console.log("aa")
})
promise.then(function(){
    console.log("aaaa")
})






















