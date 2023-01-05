// import { add } from './scripts/script';
import './styles/styles.css';
import add from './scripts/script';

// const input = document.querySelector('.inputs');
const addBtn = document.querySelector('.plus');
// const deleteBtn = document.querySelector('#delete');
// const tasks = document.querySelector('.display');

addBtn.addEventListener('click', () => {
  add();
});
