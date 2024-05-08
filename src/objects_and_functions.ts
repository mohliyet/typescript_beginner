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