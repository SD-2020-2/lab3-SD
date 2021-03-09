const name_user = document.querySelector('#name');
const id_user = document.querySelector('#user_id');

//
const createUser = function () {
	console.log('create');
	let userName = { id_user: id_user.value, name: name_user.value };
	let options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(userName),
	};

	fetch('/users', options)
		.then((response) => response.json())
		.then((data) => console.log(data));
};

// obtiene la lista de usuarios
const getList = function () {
	console.log('Get list');
	fetch('/users')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			var panel = document.createElement('div');
			data.forEach((element) => {
				var card = document.createElement('h1');
				card.innerText = element.id;
				card.innerText = element.name;
				panel.appendChild(card);
			});
			var body = document.getElementById('main');
			body.appendChild(panel);
		});
};

// const btnAdd = document.querySelector('.btn_Add');
// btnAdd.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	createUser();
// });

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	createUser();
});
const buttonGet = document.querySelector('.btn_getList');
buttonGet.addEventListener('click', getList);
