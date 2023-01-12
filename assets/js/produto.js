const counter = document.querySelector('#contador');
const buttonIncrement = document.querySelector('#botaoGostei');

let  value = counter.value;

buttonIncrement.addEventListener('click',() => {
  value = ++value;
  counter.value = value;
});
