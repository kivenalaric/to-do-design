const tasks = document.querySelector('.display');
const input = document.querySelector('.inputs');

function add() {
  if (input.value.trim() !== '') {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <div class="tasks">
        <p class="todo"> ${input.value} </p>
              <div class="del">
                <button class="cross"  id="delete">&cross;</button>
                <button class="cross"  id="done">&check;</button>
              </div>
        </div>
        `;
    tasks.appendChild(newItem);
    input.value = '';
  }
}

export default add;
