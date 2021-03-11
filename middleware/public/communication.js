const name_user = document.querySelector('#name');
const id_user = document.querySelector('#user_id');

//
const createUser = function () {
	console.log('create');
	let userName = { id: id_user.value, name: name_user.value };
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

var servidores = new Vue({
	el: '#userinfo',
	data() {
		return {
			userList: [],
		};
	},
});

function getList() {
	fetch('/users')
		.then((response) => response.json())
		.then((obj) => {
			servidores.userList = obj;
			console.log(obj);
		})
		.catch((error) => console.log(error));
}

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
