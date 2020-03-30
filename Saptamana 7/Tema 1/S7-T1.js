//--- Exercitiul 1

// construct a function to verify if the number given is odd/even;
// loop thru all numbers to verifiy if % 2 === 0 (for even) or % 2 === 1 (for odd) while using an index (i)

// function forCheck() {
//     for (i = 0; i <= 20; i++) {
//         if (i % 2 !== 0) {
//         console.log(i + ' este numar impar');
//         }
//         else {
//             console.log(i + ' este numar par');
//         }
//     }
// }

// forCheck();

// function whileCheck () {
//     var i = -1;
//     while (i++ < 20) {
//         if (i % 2 !== 0) {
//             console.log(i + ' este numar impar.'); 
//         }
//         else {
//             console.log(i + ' este numar par.'); 
//         }
//     }
// }

// whileCheck();



// // --- Exercitiul 2

// // While using an index i - we loop thru all the numbers between 0 and 10 and display the result of multiplication with 9;

// function forMultiply() {
//    for (i = 0; i < 10; i++)
//     console.log(i * 9);
// }
// forMultiply();

// function whileMultiply() {
//     var i = -1;
//     while(i++ < 10) {
//         console.log(i*9);
//     }
// }

// whileMultiply();

// --- Exercitiul 3

// i loops for every value between 0 and 10;
// while i < 10 --> j loops for every value between 0 and 10;
// when j reach value of 10 i becomes i+1 and the process is restarted;
// console.log just concat. some strings with the variables to make the result more appealing

// function multiply() {

//      for (i = 0; i < 10; i++) {
//          for (j = 0; j < 10; j++) {
//         var myVal = j;
//         console.log(i+ ' * ' + myVal + ' = ' + (i*myVal) + '\n');
//          }        
//      }

//  }
//   multiply();


// ---  Exercitiul 4

//  var grade;

//  create a loop that defines when function calificative() works;
//  loop thru all the valid result to log in the console the string;

// var calificative = function (points) {
//     if (1 <= points && points <= 3) {
//         grade = 'D';
        
//     }
//     else if (4 <= points && points <= 6) {
//         grade = 'C';
//     }
//     else if (7 <= points && points <= 8) {
//         grade = 'B';
//     }
//     else if (points === 9) {
//         grade = 'A';
//     }
//     else if (points === 10) {
//         grade = 'A+';
//     }

//     return expresion = 'Calificativul corespunzator punctajului ' + points + ' este ' + grade + '.';
// }

// console.log(calificative(3));


// function bunchOfStrings(i) {

//     for (i = 0; i <= 10; i++) {
//     result = calificative(i);    
//     console.log(calificative(i));   
//     }
    
// }

// bunchOfStrings();