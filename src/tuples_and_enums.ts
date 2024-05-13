/**
 * In this line, we're declaring a tuple named 'person'.
 * A tuple is a TypeScript data type that allows you to create 
  an array where the type of a fixed number of elements is known, but need not be the same.
 * The 'person' tuple has two elements: a string and a number.
 * The string represents a person's name and the number represents the person's age.
 * Here, 'person' is initialized with the name 'John' and the age 25.
 */
let person:[string, number] = ['John', 25];

/**
 * Properties of Tuples in TypeScript:
 *
 * 1. Fixed length: The length of a tuple is fixed. The number of elements of the tuple is determined at the time of tuple declaration.
 *    Example: let tuple1: [string, number]; // This tuple will always have two elements
 *
 * 2. Known, but different types: Each element in the tuple can be of a different type, and the type of each element is known at compile time.
 *    Example: let tuple2: [string, number, boolean]; // This tuple contains a string, a number, and a boolean
 *
 * 3. Immutable types: Once the types of the elements in a tuple are set, they cannot be changed. However, the values of the elements can be changed.
 *    Example: 
 *    let tuple3: [string, number] = ['John', 25];
 *    tuple3[0] = 'Jane'; // This is allowed
 *    tuple3[0] = 25; // This will cause a TypeScript error
 *
 * 4. Accessing elements: Elements in a tuple can be accessed using their index.
 *    Example: 
 *    let tuple4: [string, number] = ['John', 25];
 *    console.log(tuple4[0]); // Outputs: 'John'
 *
 * 5. Optional elements: TypeScript 3.0 introduced the concept of optional elements in tuples. These are elements that may or may not be present in the tuple.
 *    Example: let tuple5: [string, number?]; // This tuple might have one or two elements
 *
 * 6. Rest elements: TypeScript 3.0 also introduced rest elements in tuples, which must always be the last element in the tuple.
 *    Example: let tuple6: [string, ...number[]]; // This tuple contains a string and zero or more numbers
 */

/**
 * Enums in TypeScript
 * An enum is a special type used to define a collection of constants. 
 * Enums are used when we know all possible values at compile time, such as choices on a menu, rounding modes, command line flags, etc.
 * In TypeScript, enums are set to a 0-based number system by default, but you can manually set the value of an enum member.
 * Here's an example of an enum:
 */
enum Color {
    Red,    // 0
    Green,  // 1
    Blue    // 2
}
let c: Color = Color.Green; // 1

/**
 * In this example, `Color` is an enum. By default, enums begin numbering their members starting at 0. 
 * So `Red` is 0, `Green` is 1, and `Blue` is 2. You can access the value of an enum member via the enum value name, 
 * as shown with `Color.Green`.
 */

/**
 * Properties of Enums in TypeScript:
 *
 * 1. Numeric Enums: By default, enums are number-based. This means they store string values as numbers. The numbering starts from 0 if no initial value is specified.
 *    Example: 
 *    enum Direction {
 *        Up,    // 0
 *        Down,  // 1
 *        Left,  // 2
 *        Right  // 3
 *    }
 *
 * 2. String Enums: Enums can also store string values. In a string enum, each member has to be constant-initialized with a string literal.
 *    Example: 
 *    enum Direction {
 *        Up = "UP",
 *        Down = "DOWN",
 *        Left = "LEFT",
 *        Right = "RIGHT"
 *    }
 *
 * 3. Computed Enums: Enum members can also have computed values.
 *    Example: 
 *    enum FileAccess {
 *        None,
 *        Read = 1 << 1,
 *        Write = 1 << 2,
 *        ReadWrite = Read | Write
 *    }
 *
 * 4. Constant and Computed Members: Enum members are either constants (always the same value) or computed (value computed at runtime).
 *
 * 5. Reverse Mapping: TypeScript supports reverse mapping for numeric enums. This means that in addition to accessing the value of an enum member, you can also access the name of a specific number.
 *    Example: 
 *    enum Color {
 *        Red = 1,
 *        Green,
 *        Blue
 *    }
 *    let colorName: string = Color[2]; // Outputs: 'Green'
 *
 * 6. Const Enums: TypeScript supports const enums. Const enums can only use constant enum expressions and do not support computed members. The benefit is that they offer better performance because they do not generate additional JavaScript code and are inlined at usage sites.
 *    Example: 
 *    const enum Directions {
 *        Up,
 *        Down,
 *        Left,
 *        Right
 *    }
 *    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
 */

//example of enum

enum serverResposeStatus{
    Success,
    Error,
}

interface serverResponse{
    result: serverResposeStatus;
    data: string[];
}

function getServerResponse(): serverResponse{
    return {
        result: serverResposeStatus.Success,
        data: ['first item', 'second item'],
    };
}

const response: serverResponse = getServerResponse();

console.log(response.result); // 0 (Success)