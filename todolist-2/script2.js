const inputTask = document.getElementById('input-task');
const listWrapper = document.getElementById('list-wrapper');

function AddTask(){
  if(inputTask.value === ''){
    alert('Please write some task!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputTask.value;
    listWrapper.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputTask.value = '';
  saveData();
}
listWrapper.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem('data', listWrapper.innerHTML);
}
function showTask(){
  listWrapper.innerHTML = localStorage.getItem('data');
}
showTask();

inputTask.addEventListener('keydown', function(e){
  if (e.key === 'Enter'){
    AddTask();
  }
});