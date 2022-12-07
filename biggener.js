// 1.  //////////// odd even ///////////////////////
// let num =4 // output = Even
// function oddEven(num) {
//     return (num % 2 === 0)?'Even':'Odd'
// }

// 2.  ////////// Sum of Positive //////////////////
// let arr = [1,-4,7,12]   //output = 20
// function sumOfPositive(arr) {
//     let sum =0
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > 0) {
//                 sum += arr[i]
//             }
//         }
//         return sum
// }

// 3. /////////// Sum Without The Highest And The Lowest Number //////////////
// let arr = [6,2,1,8,10]

// function sumOfPositive(arr) {
//     return arr.sort((a,b) => a-b).slice(1,arr.length-1).reduce((a,b) => a+b)
// }

// function sumOfPositive(arr) {

//     let min, max, result;
//     result = 0;
//     min = max = arr[0];
    
//     arr.forEach((el) =>{
//       result += el;
//       min > el ? min = el : max < el ? max = el : el;
//     });
    
//     return result - max - min;
// }

// 4. ////////////////////// Repeat Str /////////////////////
// (3, "*"), "***"
// (5, "#"), "#####"
// (2, "ha "), "ha ha "
// function repeatStr (n, s) {
//     let str = '';
//     for(let i=0;i<n;i++) {
//       str += s
//     }
//     return str
//   }


// 5. ////////////////////// Convert Number To reversed array /////////////////////
// let num = 54321     // output =[1,2,3,4,5]
// function numberToArr(num) {
// return num.toString().split('').map(m => Number(m)).reverse()
// }


// 6. ////////////////////// Count true of array /////////////////////
// function countTrues(arrayOfTrue) {
//     let sum = 0;
//     for(let i=0;i<arrayOfTrue.length;i++) {
//       if(arrayOfTrue[i] === true) {
//         sum += 1
//       }
//     }
//     return sum
//   }


// 7. ////////////////////// Count of positives sum of negatives /////////////////////
// let arr = [1,2,3,4,5,-1,-2,-2,-4,-5]     // output = [-14,5]
// function countAndSum(arr) {
// let count = 0;
// let sum = 0;
// let result=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0){
//             count++;
//         }else {
//             sum +=arr[i]
//         }
//     }
//     result.push(sum,count)
//     return result
// }


// 8. ////////////////////// doubleChar /////////////////////
// let str = "abcd"     // output = 'aabbccdd'
// function doubleChar(str) {
//  return str.split('').map(e => e.repeat(2)).join('')
//   }

// 9. ////////////////////// Root Square /////////////////////
// let array = [ 100, 101, 5, 5, 1, 1 ]     // output = [ 10, 10201, 25, 25, 1, 1 ]
// function rootSquare(array) {
//     let arr = []
//     for (let i = 0; i < array.length; i++) {
//         (Number.isInteger(Math.sqrt(array[i])))?
//             arr.push(Math.sqrt(array[i]))
//             :arr.push(array[i] * array[i])
//     }
//     return arr
//   }

// 10. ////////////////////// Count by X /////////////////////
// countBy(2,5), [2,4,6,8,10] countBy(1,10), [1,2,3,4,5,6,7,8,9,10]
// function countBy(x, n) {
//     let z = [];
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         sum += x
//         z.push(sum)
//     }
//     return z;
//   }

// 11. ////////////////////// Count by X /////////////////////
// noSpace('8aaa aa dddd r     '), '8aaaaaddddr'
// function noSpace(x){
//     return x.split(' ').join('')
// }

// 12. ////////////////////// Count by X /////////////////////
// invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
// let arr =[1,-2,3,-4,5]
// function invert(arr) {
//  return arr.map( e => e*-1)
// }

// 13. ////////////////////// Reversing Words in a String /////////////////////
// reverse('I am an expert at this'), 'this at expert an am I')
// let string ='I am an expert at this'
// function reverse(string){
//     return string.split(' ').reverse().join(' ')
//   }

// 15. ////////////////////// Find Average /////////////////////
// findAverage([1,1,1]), 1)    findAverage([1,2,3,4]), 2.5)
// array = [1,2,3,4]
// function findAverage(array) {
//     if(array.length === 0) return 0
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//       sum += array[i]  
//   }
//   return sum/array.length
// }

// 16. ////////////////////// Monkey Count /////////////////////
// (monkeyCount(5)), [1, 2, 3, 4, 5]);
// (monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// function monkeyCount(n) {
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
// 
//     }
//     return arr
// }

// 17. ////////////////////// Exclamation marks from end /////////////////////
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"

// function remove(string) {
//     return string.replace(/!$/,'');
//   }

// 18. ////////////////////// Removing Elements /////////////////////
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element if array exist more two elements.
// (removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// (removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);

// function removeEveryOther(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.length > 2) {
//             (i % 2 === 0)?newArr.push(arr[i]):''
//         }else return arr
//     }
//     return newArr
//   }

// 19. ////////////////////// Rent Car Cost /////////////////////
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// function rentalCarCost(d) {
//     if(d<3) return d * 40
//     if(d>=7) return d*40-50;
//      if(3<=d<7) return d*40-20;
//   }

// 20. ////////////////////// No Zeros /////////////////////
// noZeros(1505000) , 1505
// function noZeros(num){
//     let str = String(num)
//     while(str.endsWith(0)){
//         str = str.slice(0,str.length-1)
//     }
//     return Number(str)
// }










