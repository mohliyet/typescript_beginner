let car:{brand:string;year:number; model:string} = {brand: 'Toyota', model: 'Camry', year: 2020};

console.log(car.brand='Toyota');
// console.log(car.model=10); // Error: Type '10' is not assignable to type 'string'


let book = {title: 'JavaScript',  cost:20};
let pen = {title: 'ballpoint', cost: 2};
let notebook = {title: 'spiral'};

let items: {readonly title: string; cost?: number}[] = [book, pen, notebook]; // cost is optional and title is readonly

// items[0].title = 'JavaScript'; // Error: Cannot assign to 'title' because it is a read-only property


// Challnge #04

let bike: {brand: string; year: number} = {brand: 'Honda', year: 2020};
let laptop: {brand: string; year: number} = {brand: 'Apple', year: 2021};

let product1 = {title: 'shirt', cost: 20};
let product2 = {title: 'pants'}

let products: {title: string; cost?: number}[] = [product1, product2];

// products.push({title: 'shoes', cost: '30'}); // Error: Argument of type '{title: string; cost: string;}' is not assignable to parameter of type '{title: string; cost?: number;}'

// day 2 - working with functions

// Path: typescript/src/objects_and_functions.ts

function sayHi(name:string){
    console.log(`Hello ${name.toUpperCase()}!`)
}
//options - set to any , configure tsconfig.json to allow implicit any and type annotation
sayHi('Mohammed')


function calculateDiscount(price: number){
    return price * 0.90;
} // return type is inferred



const finalPrice = calculateDiscount(100);

// assigning a type for the return value

function calculateDiscount2(price: number): number{
    const hasDiscount = true;
    if(hasDiscount){
        return price;
        // return "discount applied!" // Error: Type 'string' is not assignable to type 'number'
    }
    return price * 0.90; 
}


function addThree(number: any){
    let anotherNumber: number = 3;
    return number + anotherNumber;
} 
// The return type is any - inferred from the return value.
// Using 'any' type is not safe because it turns off TypeScript checks.
// Here, we're adding a number to 'number', so the function returns a number.
// But TypeScript doesn't enforce this because 'number' is of type 'any'.
// This can lead to errors, like when we try to call 'myMethod()' on the result.

const result = addThree(2);
const someValue = result;

// someValue.myMethod(); 
// Error: Property 'myMethod' does not exist on type 'number'.
// This error occurs because 'myMethod()' does not exist on the number type.
// But TypeScript didn't catch this error when we called 'addThree(2)',
// because it can't check properties or methods on variables of type 'any'.


//challenge #05
// create a new array of names 

const names: string[] = ['Alice', 'Bob', 'Eve']; // array of strings

//write a function that checks if a name is in your array. this function should take a name as a paramter and return a boolean. Please leave this one for me to solve it, right now I am working on the next section.

function checkName(name: string): boolean{
    return names.includes(name);
}

// use this function to check if various names are in your array and log the results.

let nameTOCheck = 'Alice';

if (checkName(nameTOCheck)){
    console.log(`${nameTOCheck} is in the array`);
}else{ 
    console.log(`${nameTOCheck} is not in the array`);
}


// Optional parameters and default values in functions:
// In TypeScript, function parameters can be made optional by appending a question mark (?) to the parameter name. 
// For example, in a function `greet(name?: string)`, the `name` parameter is optional.
// If an argument for `name` is not provided when the function is called, its value will be `undefined`.
// 
// Default parameter values can be assigned to function parameters. 
// They are used when the function is called without providing a value for that parameter.
// For example, in a function `greet(name = 'Guest')`, if `name` is not provided when calling the function, 
// it will default to 'Guest'.
//
// In the function `calculatePrice(price: number, discount: number)`, both `price` and `discount` are required parameters.
// If we want to make `discount` optional and provide a default value, we could rewrite the function as:
// `calculatePrice(price: number, discount: number = 0)`.
// Now, if `calculatePrice` is called without a `discount` argument, `discount` will default to `0`, 
// and the function will return the original `price`.

// Optional parameters and default values in functions

function calculatePrice(price: number, discount?: number): number {
    // If discount is not provided, it defaults to 0
    discount = discount ?? 0;
    return price - discount;
}

// Usage examples:
console.log(calculatePrice(100, 20)); // Output: 80
console.log(calculatePrice(100)); // Output: 100, because discount defaults to 0

// additional example

function calculateScore(intialScore: number, penaltyPoints: number=0): number{
    return intialScore - penaltyPoints;
}
 
let scoreAfterPenalty = calculateScore(100, 10);
let scoreWithoutPenalty = calculateScore(100);

// another additional example 

function calculatePrice2(price: number, discount?: number): number{
    return price - (discount || 0);
}

let finalPrice2 = calculatePrice2(100, 20);
let finalPrice3 = calculatePrice2(100);



// Define a function 'sum' that takes a string 'message' and a variable number of 'numbers' as arguments.
// The '...numbers' syntax is known as rest parameters in TypeScript and JavaScript, 
// which allows you to pass an arbitrary number of arguments to the function.
function sum(message: string, ...numbers: number[]): string {
    // Use the 'map' function to create a new array 'doubled' where each number is multiplied by 2.
    // This array is then logged to the console.
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);

    // Use the 'reduce' function to calculate the total sum of the numbers.
    // The 'reduce' function takes a callback function and an initial value (0 in this case) as arguments.
    // The callback function is called for each number in the array, with 'previous' being the accumulated value 
    // and 'current' being the current number. The callback adds 'previous' and 'current' together and returns the result, 
    // which becomes the new accumulated value for the next call. After all numbers have been processed, 'reduce' returns the total sum.
    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);

    // The function returns a string that combines the 'message' and the total sum.
    return `${message} ${total}`;
}

// Call the function with the arguments 'The sum is:', 1, 2, 3, 4, 5. 
// The result is stored in the variable 'result' and logged to the console. 
// The output will be 'The sum is: 15', because 1 + 2 + 3 + 4 + 5 equals 15.
let result0 = sum('The sum is:', 1, 2, 3, 4, 5);
console.log(result0);

// The function 'logMessage' is a simple TypeScript function that takes a single parameter: a string named 'message'. 
// The function's return type is 'void', which means it doesn't return a value. In TypeScript, 'void' is a subtype of 'undefined' 
// that is used to represent the absence of a value, typically the return value of functions that do not return anything.
// Inside the function, it uses 'console.log' to print the 'message' parameter to the console. 

function logMessage(message: string): void {
    console.log(message);
}

// After the function definition, 'logMessage' is called with the argument 'Hello, TypeScript!', 
// so 'Hello, TypeScript!' will be printed to the console.
logMessage('Hello, TypeScript!');

// The function 'processInput' demonstrates the use of union types and type guards in TypeScript.
// It accepts a parameter 'input' that can be either a string or a number (a union type).
// Inside the function, it uses type guards to check the type of 'input' at runtime.
// If 'input' is a string, it converts it to uppercase and logs it to the console.
// If 'input' is a number, it formats it with two decimal places and logs it to the console.
// The function doesn't return anything, so its return type is 'void'.

function processInput(input: string | number): void {
    if(typeof input === 'string'){
        console.log(input.toUpperCase());
    } else if (typeof input === 'number') {
        console.log(input.toFixed(2));
    }
}

// The function 'createEmployee' demonstrates the use of object destructuring and object literal shorthand syntax in TypeScript.
// It accepts an object with a property 'id' as a parameter and destructures 'id' from the object in the function signature.
// The function returns an object with properties 'id' and 'isActive'. 
// 'id' is the same as the 'id' passed into the function, and 'isActive' is a boolean that is true if 'id' is even and false if 'id' is odd.
// This is determined by the expression 'id % 2 === 0', which checks if 'id' is divisible by 2.

function createEmployee({id}: {id: number}):{
    id: number;
    isActive: boolean
}{
    return {id, isActive: id%2===0};
}

// The function is then called with two different 'id' values, 1 and 2, and the returned objects are stored in 'first' and 'second'.
// These objects are then logged to the console.
const first = createEmployee({id: 1});
const second = createEmployee({id: 2});
console.log(first, second);

//alternative 

function createStudent(student: {id: number, name:string}):void{
    console.log(`Welcome to the course ${student.name.toUpperCase()}!`);
}

const newStudent = {
    id: 5,
    name: 'Mohammed'
};

createStudent(newStudent);
createStudent({id: 6, name: 'Aliy'});