Array.prototype.my = function (){
    console.log('30');}
let arr = [10,3,56,2,2];
    arr.my();

Array.prototype.smallestnum = function () {
        let min = this[0];
        for (let i = 0; i<this.length; i++) {
            if (this[i]<min) {
                min = this[i];
             } 
        }  console.log(min);
}
let arrNum = [3,5,6,2,2];
arrNum.smallestnum();

Array.prototype.smallestString = function () {
    let minString = this[0];
    for ( let i = 0; i<this.length; i++){
        if(this[i].length<minString.length){
            minString=this[i];
        }
    } console.log(minString);
}

let someArrText = ['wdede','we','dfsfsfsfs','qwqs'];
someArrText.smallestString();


Array.prototype.idField = function () {
   console.log(this.filter(val => val.hasOwnProperty('id')))
}

let arrObj1 = {id: "Dimas", age: 30, car: true};
let arrObj2 = {mid: "Dimas", age: 30, car: true};
let arrObj3 = {id: "Dimas", age: 30, car: true};
let arrObj4 = {vid: "Dimas", age: 30, car: true};

let arrObg = [arrObj1, arrObj2, arrObj3, arrObj4];

arrObg.idField();

            // Задача про хомячків

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Speedy знайшов їду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// Lazy не знайшов їди, алe тоже з'їв apple
console.log( lazy.stomach ); // apple

            // Рішення проблеми
// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     __proto__: hamster,
//     stomach: []                 // Треба шоб в кожного хом'ячка був свій шлуночок
// };
//
// let lazy = {
//     __proto__: hamster,
//     stomach: []                 // Треба шоб в кожного хом'ячка був свій шлуночок
// };
//
// // Шустрий хом'ячок знайшов їду
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple
//
// // Шлуночок лінивого хом'ячка
// console.log( lazy.stomach ); // <нічого>











