const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}

// delay(2000).then(() => console.log('2 sec'));

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('Fetch todo started...');
//     return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data: ', data);
//     })
//     .catch(err => console.error(err))

// ------------------------

async function fetchAsyncTodos() {
    try {
        console.log('Fetch todo started...');
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data: ', data);
    } catch(e) {
        console.error(e);
    } finally {
        console.log('finally');
    }
    
}

fetchAsyncTodos();