
/*var myString;

function isString(myString){
    if (typeof myString === 'string') {
     return true;
    }
    return false;
}
console.log(isString('Hello'));

var strValue;

function isEmpty(strValue){
    if (strValue === '') {
        return true;
    }
    else if(strValue !== ''){
    return false;
    }
}
console.log(isEmpty(''));


var aString;


function stringToArray(aString){
     
     var result = aString.split(" ");
     return result;  
}

console.log(stringToArray('we love'));



var name;

function abbrevName(name) {
    var shortName = name.slice(0, 7);
    return shortName;

}

console.log(abbrevName('Robin Sight'));



var noCapital;

function capitalize(noCapital){
  capital = noCapital.replace('js', 'Js')
  return capital;
}

console.log(capitalize('js string exercises'));



var whole;

function truncateString(whole){
    truncate = whole.slice(4)
    return truncate;

}

console.log(truncateString('Robin Sigh'));



var aString;


function isUpperCaseAt(aString) {

    result = aString.charAt();

   if (result == result.toUpperCase()) {
       return true;
   }

   if (result == result.toLowerCase()) {
       return false;
   }

}
   
console.log(isUpperCaseAt('Wantsome'));



 var stringA ;

 function insert(stringA) {
     result = stringA.concat(" ", 'Javascript exercises.');
     return result;
 }

 console.log(insert('We are doing some'));




let phrase;
let removal;


function remove_first_occurrence(phrase, removal) {
  
  let newPhrase = phrase.replace(removal, '');
  return newPhrase;
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));



var word1;
var word2;

function compareStrings(word1, word2) {
    var word3 = word1.toLowerCase();
    var word4 = word2.toLowerCase();
    if (word3 === word4) {
        return true;
    }
    else return false;
    }
console.log(compareStrings('Abcd', 'abC'));

*/

var bunchOfWords;


function uncapitalize(bunchOfWords) {
   var lower = bunchOfWords.charAt(0).toLowerCase() + bunchOfWords.slice(1);
   return lower;
}

console.log(uncapitalize('Js string exercises'));
