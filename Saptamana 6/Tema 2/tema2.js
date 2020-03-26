// // EXERCITIUL 1

// // Function needs to check if:
// // 1. The number starts with 1 or 2;
// // 2. If is one the result is M else the result is F;

// // function`s argument ---> cnp
// male = 'Persoana verificata este de sexul M';
// female = 'Persoana verificata este de sexul F';

// function checkCnp(cnp) {
//     cnpToString = cnp.toString();
//         let cnpToArray;
//         cnpToArray = cnpToString.split('');
//             if (cnpToArray[0] === '1') {
//                 return male;
//             }
//             else if (cnpToArray[0] === '2') {
//                 return female;
//             }
//             else return null;
//         }
    

//     console.log(checkCnp(2920220046231));

//     // EXERCITIUL 2 

 // assign the var to a function 
 // give a function an argument
 // verify all the cases for the argument;

// var grade;

//   var calificative = function(points){
//       if (1<= points && points <=3){
//           grade = 'D'; 
//           return    
//       }
//       else if (4 <= points && points<=6) {
//           grade = 'C';
//       }
//       else if (7 <= points && points<=8) {
//           grade = 'B';
//       }
//       else if (points === 9) {
//           grade = 'A';
//       }
//       else if (points === 10) {
//           grade ='A+';
//       }

//       return expresion = 'Calificatul corespunzator punctajului ' + points + ' este ' + grade + '.';
//   }

//   console.log(calificative(10));

//  EXERCITIUL 3

// Varianta A)

let car;
let country;

function tellTheCountry(car)  {
    if (car === 'Ford') {
     country = 'USA'
    }

    else if (car === 'Renault') {
        country = 'France'    
    }
    else if (car === 'Rover') {
        country = 'UK'
    }
    else if (car === 'Skoda') {
        country = 'Czech Republic'   
    }
    else if (car === 'Opel') {
        country = 'Germany'
    }
    else if (car === 'Fiat'){
        country = 'Italy'
    }
    else country = 'dunno';

    return statement = 'Modelul ' + car + ' se produce in ' + country;
}

console.log(tellTheCountry('Tesla'));

// --- Varianta B)

let caR;
let countrY;

function theCountry(caR) {
    switch (caR) {
        case 'Skoda':
            countrY = 'Czech Rep.';
            break;
        
        case caR === 'Ford', 'Tesla', 'Chevrolet':
            countrY = 'USA';
            break;
        
        case caR === 'Opel', 'Wolksvagen', 'BMW', 'Mercedes':
             countrY = 'Germany';
             break;

        case 'Toyota':
            countrY = 'Japan';
            break;

        case 'Saab':
            countrY = 'Sweden';
            break;

        case 'Alfa Romeo', 'Fiat':
            countrY = 'Italy';
            break;

        default:
            countrY = 'dunno';
        
        
    }
   return conclusion = 'Modelul ' + caR + ' se produce in ' + countrY;

}

console.log(theCountry('Mercedes'));

// ---- Varianta C

let masinute = function(masina){
   
    let masini = {
        'Fiat': function() {
            return 'Italy';
        },

        'Opel': function() {
            return 'Germany';
        },

        'Skoda': function() {
            return 'Czech Rep.'
        },

        'Rover': function() {
            return 'Uk'
        },

        'Citroen': function() {
            return 'France'
        },

        'Tesla': function() {
            return 'USA'
        }

    };
  return  state = 'Modelul ' + masina + ' este produs in ' + masini[masina]();
}

console.log(masinute('Rover'));


// --- Exercitiul 4

var people = [
    {name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
  ];

  function compare(a, b) {

     let salary1 = a.salary;
     let salary2 = b.salary;

     let comparison = 0;

     if (salary1 > salary2) {
         comparison = 1;
     } else if (salary1 < salary2) {
         comparison = -1;     }
     return comparison
 }

 console.log(people.sort(compare));




