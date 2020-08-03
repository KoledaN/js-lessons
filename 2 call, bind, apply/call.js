function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Nata',
    age: 30,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    // sayHelloWindow: hello.bind(this)
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

// window.hello();

const lena = {
    name: 'Elena',
    age: 23
}

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog('Frontend', '8-999');

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999');
// fnLenaInfoLog();

// person.logInfo.bind(lena, 'Frontend', '8-999')();
// person.logInfo.call(lena, 'Frontend', '8-999');
person.logInfo.apply(lena, ['Frontend', '8-999']);

//--------------

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map((i) => {
//         return i * n;
//     });
// }

// console.log(multBy(array, 25));

Array.prototype.multBy = function(n) {
   return this.map((i) => {
       return i * n;
   })
}

console.log(array.multBy(20));

