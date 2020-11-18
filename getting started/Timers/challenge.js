//  a = 'Hello after 4 seconds';

//  a = 'Hello after 8 seconds';

// const theOneFunc = (a, b) => {
//     console.log(a);

//     console.log(b);

// };

// setTimeout(theOneFunc(a, 4 * 1000, b ) )

// correct solution 

const theOneFunc = delay => {
    console.log('Hello after ' + delay + 'seconds');
};

setTimeout(theOneFunc, 4 * 1000, 4);

setTimeout(theOneFunc, 8 * 1000, 8);