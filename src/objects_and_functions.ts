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

someValue.myMethod(); 
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