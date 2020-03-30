
// --- Exercitiul 1

// car = {
//      wheels: 4,
//      name: 'Mercedes'
// };

// ---- Exercitiul 2

// country = {
//     name: 'Italy',
//     capital: 'Rome',
//     language: 'italian',
//     population: 60
// }

// var info = Object.keys(country);

// console.log(info);

// var up;

// function capital(info)  {

//     for (i = 0; i < info.length; i++) {
//      info[i] = info[i][0].toUpperCase() + info[i].substr(1);
//      
//     }

//      return info;
// }

// console.log(capital(info));

// var isBig = capital(info);

// function lower(info) {
//     for (i = 0; i < info.length; i++) {
//         info[i] = info[i][0].toLowerCase() + info[i].substr(1);
//          var up = info[i];
//        }
   
//         return info;
// }
// console.log(lower(info));

// var isSmall = lower(info);

// console.log(isSmall);

//  statement = isBig.join(',') + ' are the main informations that you need to know about Italy for your knowledge.'

//  console.log(statement);


// ---- Exercitiul 3


// var niceWords = {
//     first: 'Hello',
//     second: 'Love',
//     whole : function() {
//       return this.first + ' ' + this.second;
//     }
//   };

//  console.log(person);

//------ Exercitiul 4

//  var business = {
//      location: 'Iasi',
//      intake: 2000,
//      profit: 200
//  };

//  var copyBusiness = {...business};

// copyBusiness.clients = 1000;
// copyBusiness.employees = 20;

// myHouse = { 
//     rooms: 3,
//     zone: "Bucium",
//     animals: 1
//   }

// var wholeBusiness = {...copyBusiness, ...myHouse};

// console.log(wholeBusiness);

// ---- Exercitiul 5

//  var shoppingChart = {
//      needs:
//       {milk: 2,
//       eggs: 3}
//     }

//  var myNeeds = Object.keys(shoppingChart.needs);

//  var statement = myNeeds.join(' and ') + ' apartin obiectului shoppingChart';

//  console.log(statement);

// ---Exercitiul 6
 
// var hobby = {
//     leisure: {
//         tenis: 'every day',
//         football: 'twice a week'
//     }
// }

// var howOftenTenis = hobby.leisure.tenis;
// var howOftenFootball = hobby.leisure.football;

// console.log(howOftenFootball);
// console.log(howOftenTenis);




// // --- Exercitiul 7

// function Towns(first, second, third, fourth) {
//     this.firstTown = first;
//     this.secondTown = second;
//     this.thirdTown = third;
//     this.forthTown = fourth;
//   }

//   var romania = new Towns('Bucuresti', 'Cluj', 'Timisoara', 'Iasi');
//   var ireland = new Towns('Dublin', 'Galway', 'Cork', 'Doneghal');
//   var italy = new Towns('Rome', 'Milano', 'Torino', 'Firenze');

//   var romanianTowns = Object.values(romania);
//   var irishTowns = Object.values(ireland);
//   var italianTowns = Object.values(italy);

//     function upper(romanianTowns) {
//         for (i = 0; i < romanianTowns.length; i++){
//             romanianTowns[i] = romanianTowns[i].toUpperCase();          
//         }   
//             return romanianTowns;        
//    }
// var upperRomanianTowns = upper(romanianTowns);
// var upperIrishTows = upper(irishTowns);
// var upperItalianTowns = upper(italianTowns);

//  console.log(upperRomanianTowns);
//  console.log(upperIrishTows);
//  console.log(upperItalianTowns);

