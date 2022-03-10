const ul = document.getElementById('authors');
//Создаем постоянную переменную url, в которой будет храниться URL-адрес API
const url = 'https://randomuser.me/api/?results=100';

function createNode(element) {
    return document.createElement(element);
}
 
function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
.then((resp) => resp.json())
// При этом данные JSON все равно необходимо обработать. Добавьте еще одно выражение then() с функцией, имеющей аргумент с именем data:
.then(function(data) {
    let authors = data.results;
    //Для каждого автора в переменной authors нам нужно создать элемент списка, выводящий портрет и имя автора. Для этого отлично подходит метод map():
    return authors.map(function(author) {
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');
        let br = createNode('br');
        img.src = author.picture.large;
        span.innerHTML = `${author.name.first} ${author.name.last} ${author.phone}`;
        append(li, img);
        append(li, br);
        append(li, span);
        append(ul, li); 
    })
})

.catch(function(error) {
    console.log(error);
  });


