// function addBtn() {
//     const btn = document.createElement("button");
// }

// const dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

// const weekend = ['saturday', 'sunday'];

// const day = '';


// let week = dayOfWeek.includes('monday') ? weekend.includes('saturday') : 'day off';

// console.log(dayOfWeek.includes(dayOfWeek));



// function hello(sayHello, name, age) {
//     return sayHello + ' ' + name + ' ' + age;
// }

// console.log(hello('hello','brad', 31));

// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2));

function cookFood () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('food is ready');
        }, 3000);
    } )
}

// cookFood();

// function eatMeal() {
//     return new Promise((resolve) => {
//         console.log('eating food');
//         setTimeout(() => {
//             resolve('food is ready');
//         }, 3000);
//     } )
// }

// cookFood()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// eatMeal() 
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

function hello(hello) {
    return new promise ((resolve) => {
        setTimeout(() => {
            resolve('hello');
        }, 3000);
    })
}

hello()



