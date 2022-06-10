const form = document.querySelector('#classForm');
const taskList = document.querySelector('#tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.querySelector('#taskInput');
	add(inputField.value);
	form.reset();
};

function add(description) {
	taskList.classList.remove('invisible')
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}