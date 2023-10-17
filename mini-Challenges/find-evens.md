Challenge: Find Even Squares

Write a function called `findEvenSquares` that takes an array of numbers as an argument and returns an array containing the squares of even numbers from the input array.

Instructions:

1. Define a function `findEvenSquares` that takes an array `numbers` as a parameter.
2. Initialize an empty array `evenSquares` to store the squared values of even numbers.
3. Use a loop to iterate through each number in the array.
4. Inside the loop, use a conditional statement to check if the number is even.
5. If the number is even, calculate its square and push it into the `evenSquares` array.
6. Return the `evenSquares` array.

Example:

```javascript
function findEvenSquares(numbers) {
  return; //returns an array of even squares;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = findEvenSquares(numbers);

console.log(evenSquares); // Output: [4, 16, 36, 64, 100]
```

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenSquares = findEvenSquares(numbers)

function findEvenSquares(numbers)
 if (numbers = 2 || 4 || 6 || 8 || 10) =>
 {console.log ("even")}

 let even = findEvenSquares (can a value equal a function?)

 numberSquare {
    {2: *2},
    {4: *4},
    {6: *6},
    {8: *8},
    {10: *10},
 }
 conole.log (even + numberSquare)

 <!-- I created the function in hopes of selecting each even number to console.log it. I then renamed that function as even. The object I built I was intending to use
 as a method to assign each number a value. I did not know if I should read this object with json or if this would function this way. To me, it was as though I was declaring the number
 ex. 2, 4.. and letting the result know what to do with that number. I am sure It is improper, but messing around like this is fun to try. I know coding is concise, but that doesnt mean 
 there are not ways to work around problems. The best way for me to get to that place is have a good foundation of coding and what the computer is looking for command-wise -->

 <!--  Taught way below -->


<!-- function findEvenSquares(numbers) {
    let numbersToKepp = []

    numbers.forEach(number=>{

        if(number % 2 === 0){
            numbersToKepp.push(number)
        }
    }) -->

    function findEvenSquares(numbers) {
    return numbers.filter((number)=>number)% 2 === 0)

    numbers.forEach(number=>{

        if(number % 2 === 0){
            numbersToKepp.push(number)
        }
    })

  return numbersToKeep;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = findEvenSquares(numbers);


<!-- 
 - for each loop (julia)
 - filter (khale) (recommended by teacher, but all work)
 - for of
 - for (max)
  -->