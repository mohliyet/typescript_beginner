// Type Alias and Type Inference in TypeScript

// Define a type alias 'User' for an object structure with 'id', 'name', and 'isActive' properties.
type User = {
    id: number;
    name: string;
    isActive: boolean;
}

// Define a user object 'Mohammed' using explicit type annotation.
// This is a more verbose way and can be simplified using type alias.
const Mohammed: {id: number, name: string, isActive: boolean} = {
    id: 1,
    name: 'John Doe',
    isActive: true
};

// Define a user object 'Ali' using the type alias 'User'.
// This is a more concise and preferred way when the object structure is complex or reused.
const Ali: User = {
    id: 2,
    name: 'Ali',
    isActive: false
};

/**
 * Function 'getUser' accepts a 'User' object as a parameter and returns a 'User' object.
 * It logs the user object to the console and then returns it.
 * 
 * @param user - The User object to be logged and returned.
 * @returns The same User object that was passed as a parameter.
 */
function getUser(user: User): User {
    console.log(user);
    return user;
}


// Define a type alias 'StringOrNumber' that can be either a string or a number.
type StringOrNumber = string | number;

// Declare a variable 'value' of type 'StringOrNumber'.
let value: StringOrNumber;

// Assign a string to 'value'. This is valid because 'StringOrNumber' can be a string.
value = "Mohammed";

// Assign a number to 'value'. This is also valid because 'StringOrNumber' can be a number.
value = 123;

// Define a type alias 'Theme' that can be either 'light' or 'dark'.
type Theme = 'light' | 'dark';

// Declare a variable 'theme' of type 'Theme'.
let theme: Theme;

// Assign 'light' to 'theme'. This is valid because 'Theme' can be 'light'.
theme = 'light';

// Assign 'dark' to 'theme'. This is also valid because 'Theme' can be 'dark'.
theme = 'dark';

// Define a function 'setTheme' that accepts a 'Theme' parameter and logs a message to the console.
function setTheme(theme: Theme) {
    console.log(`Setting theme to ${theme}`);
}

// Call the 'setTheme' function with 'light' as the argument.
setTheme('light');

// challenge #07

/*
- define the Employee type: Create a type employee with properties id (number), name (string), and department (string).
    type Employee = {id: number, name: string, department: string};
- define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
    type Manager = {id: number, name: string, employees: Employee[]};
- Create a Union Type: Define a type Staff that is a union of Employee and Manager.
    type Union = Employee | Manager;
- Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a 
type guard to check if the 'employees' property exists in the passed object. If it does, print 
a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that
the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and 
the department they belong to.

*/

type Employee = {id: number, name: string, department: string};
type Manager = {id: number, name: string, employees: Employee[]};
type Union = Employee | Manager;

function printStaffDetails(staff: Union) {
    if ('employees' in staff) {
        console.log(
            `${staff.name} is a manager and manages ${staff.employees.length} employees.`
        );
    } else {
        console.log(
            `${staff.name} is an employee in the ${staff.department} department.`
        );
    }
}


const alias: Employee = {id: 1, name: 'John Doe', department: 'Sales'};
const steve: Employee = {id: 2, name: 'Steve', department: 'Marketing'};

const bob:Manager = {id: 3, name: 'Bob', employees: [alias, steve]};

printStaffDetails(alias);
printStaffDetails(bob);


// Additional example

type Book = { id: number, title: string, author: string, price: number };

const book1: Book = { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', price: 20.99 };
const book2: Book = { id: 2, title: 'The Da Vinci Code', author: 'Dan Brown', price: 15.99 };

const discountedBook: Book & {discount:number} = { 
    id: 3,
    title: 'The Alchemist',
    price: 20.99,
    author: 'Paul',
    discount: 10
};

/**
 * In TypeScript, both 'type alias' and 'interface' are ways to define custom types.
 * 
 * A 'type alias' is a way to provide a new name for a type. It can represent primitive types, union types, intersection types, etc.
 * For example, 'Book' is a type alias for an object structure with 'id', 'title', 'author', and 'price' properties.
 * 
 * An 'interface' is a way to define the shape of an object. It can include properties and methods, and can be implemented by classes.
 * For example, 'Book1' is an interface that defines a structure for a book object with 'isbn', 'title', 'author', and an optional 'genre'.
 * 
 * The main differences between 'type alias' and 'interface' are:
 * - Interfaces create a new name that is used everywhere. Type aliases don’t create a new name.
 * - Type aliases can represent primitive types, union types, intersection types, etc., while interfaces are primarily for defining object structures.
 * - Interfaces are more extensible because they can be reopened to add new properties. Type aliases can't be changed after they're made.
 * - Interfaces can implement and extend each other, which is not possible with type aliases.
 */

/**
 * Interface 'Book1' defines the structure for a book object.
 * It includes properties 'isbn', 'title', 'author', and an optional 'genre'.
 * The 'isbn' property is read-only, meaning it can only be set when creating an object and cannot be modified later.
 */
interface Book1{
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
}

/**
 * 'deepWork' is a constant of type 'Book1'.
 * It is assigned an object that conforms to the 'Book1' interface.
 */
const deepWork: Book1 = {
    isbn: 123456,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
}

/**
 * Interface 'Book2' defines the structure for a book object.
 * It includes properties 'isbn', 'title', 'author', an optional 'genre', and a method 'printAuthor'.
 * The 'isbn' property is read-only, meaning it can only be set when creating an object and cannot be modified later.
 * The 'printAuthor' method is a function that logs the author of the book to the console.
 */
interface Book2{
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    printAuthor(): void;
    printTitle(message: string): string;
    printSomething: (someValue: number)=>number;
}

/**
 * 'deepWork1' is a constant of type 'Book2'.
 * It is assigned an object that conforms to the 'Book2' interface, including the 'printAuthor' method.
 */
const deepWork1: Book2 = {
    isbn: 123456,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor() {
        console.log(`Author: ${this.author}`);
    },
    printTitle(message){
        return `${this.title} ${message}`
    },
    // first option 

    // printSomething: function(someValue: number){
    //     return someValue;
    // },
    // second option 
    // printSomething: (someValue) => {
    //     console.log(this);
    //     return someValue;
    // }
    // printSomething(someValue){
    //     return someValue;
    // }
    
};

// Call the 'printAuthor' method on the 'deepWork1' object.
deepWork1.printAuthor();
const result4 =deepWork1.printTitle('is an awesome book!');

console.log(result4);

deepWork1.printSomething(10);



