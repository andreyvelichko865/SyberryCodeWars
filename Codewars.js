// 1.Math Issues

// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

JavaScript:
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};


// 2.+1 Array 

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

JavaScript:
function upArray(arr){ 
  for (let i = 0; i < arr.length; i++) {
      if(arr[i]<0 || arr[i]>9 || arr[i] === undefined){
        return null
      }
    }
  const mass = arr
  let i = 1;
  function checket(){
    if(mass[mass.length - i] != 9  ){
      let last = mass[mass.length-i] + 1
      mass[mass.length-i] = last
      return mass
    } else {
      mass[mass.length-i] = 0
      i = i+1
      return checket(i)
    }
  }
  console.log(mass[0])
  if(mass[0] === undefined){
    console.log(mass[0])
    return null
  } else if(mass[0,1,2] === 9 ){
     checket()
     mass.unshift(1)
    return mass
  } else {
  return checket()
    }
}

// 3.Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

JavaScript:
function highestRank(arr){
  let arr1 =[];
  for (let i = 0; i < arr.length; i++) { 
      const result = arr.filter(word => word === arr[i]);
      if(result.length > arr1.length){
        arr1 = result.copyWithin(0, 0);
        console.log(arr1)
      }
    }
   let m = function getMaxOfArray() {
             return Math.max.apply(null, arr1);
           }
   console.log(m())
   return m()
  }

// 4.What's a Perfect Power anyway?  

// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });



JavaScript:
let isPP = function(n){
let result=[];
  for (var m=2; m<=Math.sqrt(n); m++)
    {
        let k = 2;
        let p = Math.pow(m, k);
 
        while (p<=n && p>0)
        {
            if (p==n)
                result.push(m,k);
            k++;
            p = Math.pow(m, k);
         }
    }
       while (result.length > 0) {
      return result; 
       }
       return null; 
}


// 5.String incrementer

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

JavaScript:
function incrementString (string) {

      let x = string.replace( /^\D+/g, '');
      let len = x.length;

      str = strng.split(x);

      let number = Number(x) + 1 + '';


      while(number.length < len){
        number = '0' + number;
      }


      str = (str + number).split(',').join('');
      return str;
    }

// 6.Format a string of names like 'Bart, Lisa & Maggie'.
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns '' ;

JavaScript:

function list(names){
 return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}	

