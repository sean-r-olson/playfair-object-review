console.log('Hello! Weve got objects');

//Object Literal 
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log('baseballHat',baseballHat);
console.log(`The baseballHat is ${baseballHat.color} in size ${baseballHat.size}`);

console.log('Before setting size:',sunHat);
//Const w/ objects 
sunHat.size = 'XL';
console.log('After setting size:', sunHat);

// Can't set to another object 

// sunHat = {
//     type: 'sun',
//     color: 'white',
//     size: 'S'
// }
// console.log('Set up to a new hat?',sunHat);

let penguins = [
  {
    name: 'Emperor',
    colors: ['Black', 'White', 'Yellow'],
    size: 1.0,
    isCute: true
  },
  {
    name: 'Little',
    colors: ['Slate-blue', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Rockhopper',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.75,
    isCute: true
  },
  {
    name: 'African',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Gentoo',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Sea Gull',
    colors: ['Gray'],
    size: 0.25,
    isCute: false
  },
  {
    name: 'Chinstrap',
    colors: ['Black', 'White'],
    size: 0.25,
    isCute: true
  },
  {
    name: 'Macaroni',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.5,
    isCute: true
  },
];

//write function that takes in an array and only returns arrays that contain cute penguins 

// function cutePenguins (penguins) {
//     let onlyCutePenguins =[];
//     for (let thing of penguins) {
//         if ( thing.isCute ) {
//             onlyCutePenguins.push(thing)
//         }
//     }
//     return onlyCutePenguins;
// }
//    function cutePenguins (inputArray) {
//     let thing = inputArray[i];
// for ( let i=0; i<inputArray.length; i++) {
//         outputArray.push(thing);
//     }
//     return outputArray;
// }

// console.log(cutePenguins(inputArray));

// Object constructor functions 

//create function 'Hat' which will take in three arguments 'type', 'color', and 'size'.
function Hat(myType, myColor, mySize) {
    this.type = myType;
    this.color = myColor;
    this.size = mySize;
}


const fancyHat = new Hat('fancy', 'gold', 'M'); 
console.log(fancyHat);