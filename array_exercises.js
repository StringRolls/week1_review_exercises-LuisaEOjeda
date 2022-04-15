// --------ARRAYS--------

// Exercise 1:
// Write a function that takes as a first argument the number of times you want to repeat certain value and
// the value you want to repeat as the second argument. Then it should return a new array with the given values.
// Example:
// fill(3, 'a'); // expected output => ['a', 'a', 'a']

function repeatValues(num, value) {
  const repetionsArr = [];

  for (let i = 0; i < num; i++) {
    repetionsArr.push(value);
  }
  return repetionsArr;
}

//console.log(repeatValues(3, "Beetlejuice")); // ['Beetlejuice', 'Beetlejuice', 'Beetlejuice']

// Exercise 2:
// Write a function that takes an array as the only argument and reverts it. Avoid using array.prototype.reverse().
// Example:
// reverse([1,2,3]); // expected output => [3,2,1]

const numbersArr = [1, 2, 3, 4];

function reverseArr(arr) {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

//console.log(reverseArr(numbersArr)); // [4, 3, 2, 1]

// Exercise 3:
// Write a function that clears an array from all unnecessary elements (false, undefined, empty strings, 0, null).
// Example:
// compact([0, 1, false, 2, undefined, '', 3, null]); // expected output => [1,2,3]

const dirtyArr = [0, 1, false, 2, undefined, "", 3, null];

function arrClear(arr) {
  const clearArr = arr.filter(item => !isNaN(parseInt(item)))

  return clearArr;
}

//console.log(arrClear(dirtyArr)); // [0, 1, 2, 3]

// Exercise 4:
// Write a function that takes as an argument an array of arrays and returns an object composed of key-value pairs.
// Example:
// formPairs([['a', 1],['b', 2]]); // expected output => { a: 1, b: 2}

const arrPairs = [['a', 1],['b', 2]]

function arrToObject(arr) {

    const arrNowObj = Object.fromEntries(arr);

    return arrNowObj;
}

//console.log(arrToObject(arrPairs)); // {a: 1, b: 2}

// Exercise 5:
// Write a function that takes an array as a first argument and then two values as the second and third argument.
// It should return an array without the two values passed as arguments.
// Example:
// without([1,2,3,1,2], 1, 2); // expected output => [3]

const repeatedNums = [1,2,3,1,2]

function getMissingVal (arr, val1, val2){
    const missingVal = arr.filter((val)=>{ 
        return val !== val1 && val !== val2
    })
        
       return missingVal;
    }


//console.log(getMissingVal (repeatedNums, 1, 2))

// Exercise 6:
// Write a function that takes two arrays as arguments and compares if they are identical.
// Example:
// isEqual([1, 2, 3, 4],[1, 2, 3, 4]) // expected output => true
// isEqual([1, 2, 3, 4],[1, 2, 3, 4, 5]) // expected output => false

const arrOne = [1, 2, 3, 4];
const arrTwo = [1, 2, 3, 4];

const arrThree = [1, 2, 3, 4];
const arrFour = [1, 2, 3, 4, 5];

function isEqual (arr1, arr2){

    if (!arr1.length && !arr2.length) return false;

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;

}

//console.log(isEqual(arrThree, arrFour))

// Bonus – Exercise 7:
// Write a function that takes an array as the first argument and a number as the second argument.
// It should return the array split into parts of the determined size.
// Example:
// chunk([1, 2, 3, 4, 5, 6, 7], 2); // expected output => [[1, 2], [3, 4], [5, 6], [7]]

const numbersToChop = [1, 2, 3, 4, 5, 6, 7];

function splitArr (arr, num){
    
    const splitedArr = []
    
    if (num === 0) return arr
    
    for (let i = 0; i < arr.length; i += num){
    splitedArr.push(arr.slice(i, i + num)); 
    }
    
    return splitedArr
};

console.log(splitArr(numbersToChop,3))