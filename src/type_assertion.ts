/**
 * Type assertion in TypeScript is like type casting in other languages, but it doesn't perform any special checking or restructuring of data. 
 * It's simply a way to tell the TypeScript compiler "trust me, I know what I'm doing." 
 * Type assertion is used when the programmer knows more about the type of a variable than what TypeScript can infer on its own.
 *
 * There are two syntaxes for type assertion:
 *
 * 1. Angle-bracket syntax:
 *    Example: 
 *    let someValue: any = "this is a string";
 *    let strLength: number = (<string>someValue).length;
 *
 * 2. `as` syntax:
 *    Example: 
 *    let someValue: any = "this is a string";
 *    let strLength: number = (someValue as string).length;
 *
 * In both examples, we're asserting the variable `someValue` to be of type `string`, so that we can access the `length` property available on it.
 */

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

console.log(strLength); // 16
console.log(strLength2); // 16

type Bird = {
    name: string;
};

let birdString = '{"name": "sparrow"}';
let dogString = '{"name": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name); // { name: 'sparrow' }
console.log(dog.name); // { name: 'Poodle' }


enum Status {
    Pending = 'PENDING',
    Decline = 'DECLINE',
}

type User = {
    name: string;
    status: Status;
};

const statusValue = 'PENDING';
const user:User = {name: 'John Doe', status: statusValue as Status}