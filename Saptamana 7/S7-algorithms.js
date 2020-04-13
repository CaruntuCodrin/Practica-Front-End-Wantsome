
//--- Exercitiul 1

let email;

function myEmail(email) {

  partOfEmail = email.substr(0, 7);

  coverEmail = partOfEmail + '....@yahoo.com';

  return coverEmail;
}

 console.log(myEmail('codrin_valentin@yahoo.com'));

// ---- Exercitiul 2

let statement;

function upper(statement) {

  newStatement = statement.split(' ');

  for (i = 0; i < newStatement.length; i++) {
    newStatement[i] = newStatement[i][0].toUpperCase() + newStatement[i].substr(1);
  }

  return newStatement.join(' ');
}

console.log(upper('i am superman'));


// // // -- Exercitiul 3


function change(word) {

  newWord = word.split('');

  for (i = 0; i < newWord.length; i++) {
    if (newWord[i] == newWord[i].toUpperCase()) {
      newWord[i] = newWord[i].toLowerCase();

    }
    else if (newWord[i] == newWord[i].toLowerCase()) {
      newWord[i] = newWord[i].toUpperCase();
    }

  }
  return newWord.join('');

}
console.log(change('avcAVC'));


// // // --- Exercitiul 4 

function checkPalindromeV1(word1) {
  var re = /[\W_]/g;
  var lowWord = word1.toLowerCase().replace(re, '');
  var upSideDOwn = lowWord.split('').reverse().join('');
  return upSideDOwn === lowWord;
}

console.log(checkPalindromeV1("A man, a plan, a canal. Panama"));

function checkPalindromeV2(word2) {
  var re = /[^A-Za-z0-9]/g;
  word2 = word2.toLowerCase().replace(re, '');
  var letters = word2.length;
  for (var i = 0; i < letters / 2; i++) {
    if (word2[i] !== word2[letters - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindromeV2("level"));

// // Exercitiul 5


function checkNumber(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {

    item = arr[i];

    for (j = 0; j < item.length; j++) {
      if (item[j] < item[j+1]) {
        var max = item[j+1];
      }
      else if (item[j] > item[j+1]){
        var max = item[j]
      } 
    }

    newArr.push(max);

  }
  return newArr;
}

console.log(checkNumber([[10,9], [7, 4]]));

// --- Exercitiul 6

function reverse(str) {
  strToArr = str.split('');
  reverseArr = strToArr.reverse();
  joinArr = reverseArr.join('');

  return joinArr;
}


// console.log(reverse('hello'));

// // ---- Exercitiul 7


function factorial(nr) {
  if (nr == 1) {
      return 1;
  } else {
      return nr * factorial(nr-1);
  }
}

console.log(factorial(3));



// // ----- Exercitiul 8

function confirmEnding(someString, otherString) {

  return someString.slice(someString.length - otherString.length) === otherString;
}

console.log(confirmEnding("Salut, numele meu este Codrin", "Codrin"));

// // ---- Exercitiul 9

 
function checkFunct(array1, trueFunct) {
  let number = 0;

  for (var i = 0; i < array1.length; i++) {
    number = array1[i];
    if (trueFunct(num)) {
      return number;
    }
  }

  return undefined;
}


// ----- Exercitiul 10

function checkString(array2) {
  var verify = array2[1].toLowerCase();
  var container = array2[0].toLowerCase();
  for (var i = 0; i < verify.length; i++) {
    if (container.indexOf(verify[i]) < 0) return false;
  }
  return true;
}

console.log(checkString('hello', 'Hello'))

// --- Exercitiul 11

function checkNr(array3, someNumber) {
  let theNr = [];
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] === someNumber) {
       theNr.push(array3[i]);
    }
  }
  return theNr;
}

console.log(checkNr([1,2,3,4], 4));

// --- Exercitiul 12

function lookingForFalsy(array3) {
  let newArr = [];
  for (var i = 0; i < array3.length; i++) {
    if (array3[i]) newArr.push(array3[i]);
  }
  return newArr;
}

console.log(lookingForFalsy([1, NaN, false, 'string']));

// --- Exercitiul 13

function repeatStr(string1, nr1) {
  var bigString = "";

  while (nr1 > 0) {
    bigString += string1;
    nr1--;
  }

  return bigString;
}

console.log(repeatStr('Codrin ', 10));