// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і 
// виводить значення кольору в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


button.addEventListener('click', (event) => {
  const changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  colorValue.textContent = changeColor;

  console.log(colorValue)
})