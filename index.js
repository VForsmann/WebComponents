let tasks = [
  { title: 'Angular lernen', status: 'done' },
  { title: 'Web Components lernen', status: 'open' }
];
let template = document.getElementById('task');
let taskListElement = document.querySelector('.tasks');
for (let i = 0; i < tasks.length; i++) {
  let task = tasks[i];
  let taskElement = template.content.cloneNode(true);
  taskElement.querySelector('.status').style.display =
    task.status === 'open' ? 'none' : 'inherit';
  taskElement.querySelector('.title').innerText = task.title;
  taskListElement.appendChild(taskElement);
}
