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