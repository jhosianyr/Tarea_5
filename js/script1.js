// FIBONACCI NUMBERS
const Fibonacci_0to1000 = (a,b) => {
    for (let i=0; i<=16; i++){                
        console.log("Numbers 0 to 1000:",a);
        c = a+b;
        a = b;
        b = c;
                
    }
}
Fibonacci_0to1000 (0,1)

// FIBONACCI PAIR NUMBERS
const Fibonacci_0to1000pairs = (a,b) => {
    for (let i=0; i<=16; i++){                
        if  (a%2===0){console.log("Numbers 0 to 1000 pair numbers:",a)};
        c = a+b;
        a = b;
        b = c;
               
    }
}
Fibonacci_0to1000pairs (0,1)

// FIBONACCI ODD NUMBERS
const Fibonacci_0to1000odd = (a,b) => {
    for (let i=0; i<=16; i++){                
        if  (a%2===1){console.log("Numbers 0 to 1000 odd numbers:",a)};
        c = a+b;
        a = b;
        b = c;               
    }
}
Fibonacci_0to1000odd (0,1)