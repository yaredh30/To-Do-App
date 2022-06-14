const inputEl = document.querySelector('#input-el');
const btnEl = document.querySelector('#btn-el');
const olEl = document.querySelector('#ol-el');

btnEl.addEventListener('click', renderToDo)

    
function renderToDo() {

   const newTodo = inputEl.value
   if(newTodo.length === 0 ) return
    const div = document.createElement('div');
    div.classList.add('div');
    const li = document.createElement('li');
    li.textContent = inputEl.value;
    div.appendChild(li)
    li.classList.add('li')
    const btnCheck = document.createElement('button')
    btnCheck.innerHTML = `<i class="fa-solid fa-check"></i>`
    btnCheck.classList.add('btn-check');
    div.appendChild(btnCheck)
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`
    btnDelete.classList.add('btn-delete');
    div.appendChild(btnDelete);
    olEl.appendChild(div);
    inputEl.value = ''
    btnCheck.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
        li.classList.add('complete')
    })

    btnDelete.addEventListener('click', function(){
        li.remove()
        btnCheck.remove()
        btnDelete.remove()


    })

}