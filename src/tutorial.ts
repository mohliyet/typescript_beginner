console.log('Hello TypeScript!');

let awesomeName:string = 'Mohammed';

awesomeName = 'Aliy';
awesomeName.toLocaleUpperCase();

// awesomeName = 10; // Error: Type '10' is not assignable to type 'string'

let age:number = 10;
age += 1;

// age = '10'; // Error: Type '"10"' is not assignable to type 'number'

let isAwesome:boolean = true;
isAwesome = false;

// isAwesome = 10; // Error: Type '10' is not assignable to type 'boolean'

// we can also ignore the type and the assigned value directly deterimines the type
let isAwesome2 = true;

// isAwesome2 = 10; // Error: Type '10' is not assignable to type 'boolean'

// now let's handle a challenge 
// challenge - create a variable of type string and try to invoke a method on it.

let myName:string = 'Mohammed';
myName.toLocaleLowerCase(); // makes all the letters assigned to the value of myName to lower case

// create a variable of type number and try to perform a mathematical operation on it

let mySalary = 1000;
mySalary += 200; // mathematical operation is performed on the value of mySalary - bonus of 200 is added to the value of mySalary

// create a variable of type boolean and try to perform a logical operation on it

let amIEligible = false;
amIEligible =true // logical operation is performed on the variable amIEligible.

// Type Annotation: Explicitly specifying the type of a variable using a colon (:) followed by the type.
// Type Inference: Automatically determining the type of a variable based on its assigned value.

// Example of Type Annotation
let myNumber: number = 10;

// Example of Type Inference
let myString = "Hello, TypeScript!";