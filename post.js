//Обработка запросов POST
//По умолчанию Fetch использует запросы GET, но вы также можете использовать и все другие типы запросов, изменять заголовки и отправлять данные. Для этого нужно задать объект и передать его как второй аргумент функции fetch.
//Прежде чем создать запрос POST, создайте данные, которые вы хотите отправить в API. Это будет объект с именем data с ключом name и значением
const url = 'https://randomuser.me/api';

let data = {
  name: 'Name'
}
let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
}
//Интерфейс Headers является свойством Fetch API, который позволяет выполнять различные действия с заголовками запросов и ответов HTTP. 

//С этим кодом можно составлять запросы POST, используя Fetch API. Мы добавим url и fetchData как аргументы запроса fetch POST
// fetch(url, fetchData)
// .then(function() {
//     // Handle response you get from the server

// });

// Есть и другая опция, позволяющая создать объект и использовать функцию fetch(). Вместо того, чтобы создавать такой объект как fetchData, вы можете использовать конструктор запросов для создания объекта запроса. Для этого нужно создать переменную с именем request
 //Для переменной request следует задать значение new Request. Конструкт new Request принимает два аргумента: URL API (url) и объект. В объекте также должны содержаться ключи method, body и headers, как и в fetchData
 var request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});
fetch(request)
.then(function() {
    // Handle response we get from the API
    
})

