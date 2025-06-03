// solution 1: solve the problem recursively 
const sumNumbersRecursive = (numbers) => {
    if(numbers.length === 0 ) return 0
    return numbers[0]+ sumNumbersRecursive(numbers.slice(1))
};
console.log(sumNumbersRecursive([5, 2, 9, 10])) // -> 26)


// solution 2: solve it with the normal loop 
// const sumNumbersRecursive = (numbers) => {
//     let sum = 0 
//     for(let i = 0 ; i < numbers.length; i ++ ){
//         sum += numbers[i]
//     }
//     console.log(sum)
// };
// console.log(sumNumbersRecursive([5, 2, 9, 10])) // -> 26)
// // the third implementation is to use a reducere function which is like a callback fn 

// const sumNumbersRecursive = (numbers) => {
//     return numbers.reduce((num1, num2) => num1 + num2, 0)
// };
// console.log(sumNumbersRecursive([5, 2, 9, 10])) // -> 26)