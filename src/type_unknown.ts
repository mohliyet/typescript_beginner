let unknownValue: unknown;

unknownValue = 'hello';
unknownValue = 123;
unknownValue = true;


// unknownValue.toFixed(2) // Error: Property 'toFixed' does not exist on type 'unknown'.

if(typeof unknownValue === 'string') {
    console.log(unknownValue.toUpperCase());
}


function runSomeCode(){
    const random = Math.random()
    if(random < 0.5){
        throw new Error('There was an error...')
    }else {
        throw 'some error';
    }
}

try {
    runSomeCode();
    
} catch (error) {
    if(error instanceof Error){
        console.log('Error:', error.message)
    }else {
        console.log('Error:', error)
    }
}
