// // Exercitiul 1

// // function customMap(array, callback) {
// // 	var arr = [];
// // 	for(var index in array){
// // 		arr.push(callback(array[index + 1]));
// // 	}
// // 	return arr;
// // }

//  var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
// //console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
// //console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

function customMap(array, callback) {
    var arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(callback(array[i]))
    }
    return arr;
}

function print(value) {
    return value += 1;
}

function double(anotherValue) {
    return anotherValue *= 2; 
}

function square(someValue) {
    return someValue **= 2;
}

console.log(customMap(randomArray, print));
console.log(customMap(randomArray, double));
console.log(customMap(randomArray, square));



// 2


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.

const myArr = [2, 4, 5 ,7, 403, 43, 34, 9];

 function filter(array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      filteredArray.push(array[i]);
    }

  }
  return filteredArray;
};

function odd (a) {
    if (a % 2 !== 0) {
        return true;
    }
}

function biggerThan(b) {
    if(b > 10) {
        return true;
    }
}

function isDivisible(c) {
    if (c % 3 === 0) {
        return true;
    }
}

function smallAndOdd(d) {
    if (d < 10 && d % 2 === 1) {
        return true;
    }
}

function bigOrEven(e) {
    if (e > 25 || e % 2 === 0) {
        return true;
    }
}

console.log(filter(myArr, odd));
console.log(filter(myArr, biggerThan));
console.log(filter(myArr, isDivisible));
console.log(filter(myArr, smallAndOdd));
console.log(filter(myArr, bigOrEven));


// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

let someObj = {
    'status': ['succes', 'error']
}

function multipleCallBacks(obj, callback1, callback2) {
    let value = Object.values(obj);
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== 'succes') {
            return callback1();
        }
        else return callback2();
    }
    
}

function succes() {
   return `Succes`;
}

function trowErr() {
    return `Error`;
}

console.log(multipleCallBacks(someObj, succes, trowErr))
console.log(multipleCallBacks(someObj, succes, trowErr))