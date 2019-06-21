// const array = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,4];
let array = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];


function findOdd(array) {
    //happy coding!
    arrObject = {};
    for (let i = 0; i < array.length; i++) {
      if (!arrObject[array[i]]) {
        arrObject[array[i]] = 1;
        } else {
        arrObject[array[i]] += 1;
        }
      }
      console.log(arrObject)
    for (let key in arrObject) {
      if (arrObject[key] % 2 !== 0) {
        console.log(key);
        }
  }
};

// findOdd(array);


// const odd = (xs) => xs.reduce((a,b) => a ^ b);

// odd(array);

// console.log(a);
// console.log(b);

let test = 5 ^ 1

console.log(test)