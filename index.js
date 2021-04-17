//найти сумму массива чисел
let getSum = function(array){
    //пиши код здесь
}

let getMax = function(array){
    //пиши код здесь
}

//напечатать имя второго домашнего животного
let printSecondPet = function(obj){
    //пиши код здесь
}

/*
Ещё: добавить код, чтобы когда кнопка нажата, 10 'p' теги (<p></p>)
добавлаются в <div id="container"> с любым текстом.
*/






//тесты с ответами
//не меняй
console.log(`getSum: ${getSum([1, 2, 3, 4, 5, 6, 7, 10])}`) //38

console.log(getMax([11, 4, 5, 6])); //11
console.log(getMax([])) //undefined
console.log(getMax([-10, -15, -2])) //-2

console.log(printSecondPet({
    name: "Bob",
    pets: ["Alan", "Aaron", "Frank"],
}));  //"Aaron"
console.log(printSecondPet({
    name: "Ivan",
    age: 15,
    pets: ["Fluffy"]
}));  //undefined