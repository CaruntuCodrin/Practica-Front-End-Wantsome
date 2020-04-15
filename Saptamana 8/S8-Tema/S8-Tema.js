
//Exercitiul 1

//1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata

let wholeSum = nr => {
    let sum = 0;
    for (let index = 1; index <= nr; index++) {
        sum += index;
    }
    return sum;
}
console.log(wholeSum(5));

// Exercitiul 2
//Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.

let biggestString = str => {
    let array = str.split(' ');
    let max = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > max.length) {
            max = array[i];
        }
    }
    return max;
}

console.log(biggestString('Which one is the biggest string?'));

// Exercitiul 3
// 3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'


let reverseString = someString => {
    stringToArray = someString.split('');
    reversedArray = stringToArray.reverse();
    reversedString = reversedArray.join('');

    return reversedString;
}

console.log(reverseString('Japonia'));

// Exercitiul 4
//

let nextLetter = someWord => {

    let result = "";
    for (let i = 0; i < someWord.length; i++) {
        var nextLett = String.fromCharCode(someWord.charCodeAt(i) + 1);
        result = result + nextLett;
    }
    return result;
}
console.log(nextLetter('abcdefghi'));

// Exercitiul 5
//Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet

let converter = givenNr => {

    minutes = Math.floor(givenNr / 60);
    seconds = givenNr % 60;
    return `${minutes} : ${seconds}`;
}

console.log(converter(1423));


// Exercitiul 6
//Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic

let alphabetical = word => {
    return word.split('').sort().join('');
}

console.log(alphabetical('covid'));

// Exercitiul 7
// Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
// Exemplu: input: "+a+b+c+"   ->   output: true
// Exemply: input: "+ab+c+d+"  ->   output: false

function plus(plusWord)  {
    let plusWordToArray = plusWord.split('');
    for (let i = 0; i < plusWordToArray.length; i++) {
        if (plusWordToArray[i] === '+' && plusWordToArray[i + 2] === '+') {
            return true
        } else {
            return false;
        }
    }

}

console.log(plus('+ab+c+'));