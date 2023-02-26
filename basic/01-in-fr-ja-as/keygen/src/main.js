import { nanoid } from 'nanoid';
import '../style.css'

// console.log(nanoid());
const btn = document.querySelector('button');
const display = document.querySelector('h2');

btn.addEventListener('click', () => {
  display.innerHTML = nanoid();
})