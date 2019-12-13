/*const store = "http://jsonplaceholder.typicode.com/todos";
//request
fetch(store)
//response
.then(response => response.json())
//success
.then((data) => {
    const table = document.querySelector('table');
    data.forEach(element => {
        const {userId, id, title, completed} = element;
        table.innerHTML += `
            <tr>
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.completed}</td>
            </tr>
        `;
        
    });
})
//error
.catch(() => console.log("Cann't request data"))
// always excute
.finally(() => console.log("always excute"));
*/
const url = "http://jsonplaceholder.typicode.com/todos";
const method = "GET";
const syncs = true;
const todos = new XMLHttpRequest();
todos.open(method, url, syncs);
todos.onload = ()  => { 
    const restult = document.querySelector("table");
    const data = JSON.parse(todos.response);
    data.forEach(element => {
        restult.innerHTML += `
            <tr>
                <td>${element.userId}</td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.completed}</td>
            </tr>
        `;
    });
}
todos.send();
