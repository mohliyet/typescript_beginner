let unknownValue: unknown;

unknownValue = 'hello';
unknownValue = 123;
unknownValue = true;


// unknownValue.toFixed(2) // Error: Property 'toFixed' does not exist on type 'unknown'.

if(typeof unknownValue === 'string') {
    console.log(unknownValue.toUpperCase());
}

try {
    throw 'string'
    throw new Error('There was error...')
    
} catch (error) {
    console.log(error.message);
}