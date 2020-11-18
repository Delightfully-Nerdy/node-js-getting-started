// my solution 

// const Hello = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log('Hello world');
//     }
// };

// console.log(Hello());
// console.log('Done');

// actual solution 

let counter = 0;
const intervalid = setInterval(() => {
    console.log('Hello World');
    counter += 1;

    if (counter === 5) {
        console.log('Done');
        clearInterval(intervalid);
    }
}, 1000)