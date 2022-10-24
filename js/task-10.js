


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  containerRef: document.querySelector('#boxes'),
  inputRef: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};


refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const newContainersArray = [];
  amount = refs.inputRef.value;

  for (let i = 0; i <= amount; i+=1) {
    const newContainer = document.createElement('div');
    newContainer.style.width = `${30+i*10}px`;
    newContainer.style.height = `${30+i*10}px`;
    newContainer.style.backgroundColor = getRandomHexColor();
    
    newContainersArray.push(newContainer);
  }

  refs.containerRef.append(...newContainersArray);
}

function destroyBoxes(){
refs.containerRef.innerHTML = '';
}