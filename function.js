function sayHello(){
    console.log("Good Morning!");
    console.log("Good Night!");
}

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}

function add(num1, num2){
    var result = num1+ num2;
    return result;
}

var sum = add(10, 30);
console.log(sum);

doubleIt(5);
doubleIt(10);
doubleIt(50);

sayHello();