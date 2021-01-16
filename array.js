var friendsAge = [15, 14, 17, 19];
console.log("Array: "+ friendsAge); 

// position
console.log("0th position: " + friendsAge[0]); 

var sonaliAge = friendsAge[2];
console.log("Sonali's age: " + sonaliAge);

// update
friendsAge[1] = 21;
console.log("Updated array: " + friendsAge);

// position
var position = friendsAge.indexOf(19);
console.log("Position of 19: " + position);

// length
console.log("Array length: " + friendsAge.length);

// push (adds elements to the end)
friendsAge.push(16);
friendsAge.push(25);
console.log(friendsAge);
console.log("New Array length: " + friendsAge.length);

// pop (the last element)
friendsAge.pop();
console.log("New Array: " + friendsAge);
console.log("New Array length: " + friendsAge.length);

// unshift (adds element to the beginning)
friendsAge.unshift(30);
console.log(friendsAge);

// shift (removes element from the beginning)
friendsAge.shift();
console.log(friendsAge);