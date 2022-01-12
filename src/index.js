// import Task from './components/task.js';
import './style.css';

const arrayTasks = [
  {
    description: 'wash the dogs',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 1,
  },
  {
    description: 'fix car',
    completed: false,
    index: 2,
  },
];

// function Task(task) {
//   let isSelected = false;
//   const li = document.createElement('li');
//   const itemTaskElement = document.createElement('div');
//   const checkBox = document.createElement('input');
//   const checkBoxContainer = document.createElement('div');
//   checkBoxContainer.classList.add('checkbox-container');
//   const label = document.createElement('label');
//   const iconMenu = document.createElement('div');
//   const iconDelete = document.createElement('div');
//   iconMenu.classList.add('icon-menu-container');
//   itemTaskElement.classList.add('item-element');
//   iconMenu.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
//   iconDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
//   checkBox.type = 'checkbox';
//   checkBox.id = `check${task.index}`;
//   label.htmlFor = `check${task.index}`;
//   label.innerText = task.description;

//   label.addEventListener('click', () => {
//     isSelected = !isSelected;
//     if (isSelected === true) {
//       label.style.textDecoration = 'line-through';
//     } else {
//       label.style.textDecoration = 'none';
//     }
//   });

//   checkBox.addEventListener('click', () => {
//     if (checkBox.checked) {
//       label.style.textDecoration = 'line-through';
//     } else {
//       label.style.textDecoration = 'none';
//     }
//   });

//   checkBoxContainer.append(checkBox, label);
//   itemTaskElement.append(checkBoxContainer, iconMenu);
//   li.appendChild(itemTaskElement);
//   return li;
// }

function component() {
  const containerElement = document.createElement('div');
  const titleElement = document.createElement('div');
  const paragraphTitle = document.createElement('div');
  const iconRefresh = document.createElement('div');
  const inputElement = document.createElement('input');
  const ulElement = document.createElement('ul');
  const btnClearTasks = document.createElement('button');

  containerElement.classList.add('container-todo');
  titleElement.classList.add('title');
  paragraphTitle.innerHTML = "Today's To Do";
  iconRefresh.innerHTML = '<i class="fas fa-sync-alt"></i>';
  titleElement.append(paragraphTitle, iconRefresh);
  inputElement.placeholder = 'Add to your list...';
  btnClearTasks.textContent = 'Clear all completed';
  btnClearTasks.classList.add('btn-clear-task');
  btnClearTasks.disabled = true;

  //   arrayTasks.map((task) => {
  //     ulElement.appendChild(Task(task));
  //     return 'done';
  //   });

  containerElement.append(titleElement, inputElement, ulElement, btnClearTasks);

  return containerElement;
}

const root = document.querySelector('.root');

root.appendChild(component());
