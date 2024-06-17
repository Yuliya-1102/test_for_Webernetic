
const modalClose = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal');
const btnSign = document.querySelector('.btn__sign-in');
const inputs = document.querySelectorAll('input');

inputs.forEach(item => {
  if(item.getAttribute("type") === 'tel') {
    item.value = '+375 99 999-99-99'
  }
  if(item.getAttribute("type") === 'password') {
    item.value = 'Helloitsme'
  }
})

function closeModal() {
  modalForm.classList.add('hidden');
}


modalClose.addEventListener('click', closeModal);
btnSign.addEventListener('click', closeModal);
