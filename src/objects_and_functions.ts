let car:{brand:string;year:number; model:string} = {brand: 'Toyota', model: 'Camry', year: 2020};

console.log(car.brand='Toyota');
// console.log(car.model=10); // Error: Type '10' is not assignable to type 'string'


let book = {title: 'JavaScript',  cost:20};
let pen = {title: 'ballpoint', cost: 2};
let notebook = {title: 'spiral'};

let items: {readonly title: string; cost?: number}[] = [book, pen, notebook]; // cost is optional and title is readonly

// items[0].title = 'JavaScript';

