//Creating boxes using a loop 
let htmlElements = "";
for (let i = 0; i < 256; i++) {
    htmlElements += '<div class="box"></div>';
}


//Adding the boxes to the container
let container = document.querySelector('.container');


container.innerHTML = htmlElements;

//Adding a button to the top of the container
let body = document.querySelector('body');

let button = document.createElement('button');
button.classList.add('to-alert');
button.innerText = 'Click me!';
body.insertBefore(button, container);


//Adds a mouseover listener to every box
const hover = document.querySelectorAll('.box');
hover.forEach((box) => {

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    })
})

//Add a 'click' listener asking how many squares per side
const click = document.querySelector('button');

let boxes;
click.addEventListener('click', () => {
    let number = prompt("How many boxes?", "Invalid");
    boxes = number;console.log(boxes);
    boxMaker(boxes);
    boxResize(boxes);

});


//FUNCTIONS
function boxMaker(number) {

    let container = document.querySelector('.container');
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    let boxes = "";
    for(let i = 0; i < number * number; i++) {
        boxes += '<div class="box"></div>';
    }
    container.innerHTML = boxes;

    const hover = document.querySelectorAll('.box');
    hover.forEach((box) => {

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    })
})
}

function boxResize(number) {
    let width = 352;
    let boxes = number;
    let newWidth = width / boxes;
    const box = document.querySelectorAll('.box');
    box.forEach((aBox) => {
        aBox.style.width = newWidth + "px";
        aBox.style.height = newWidth + "px";
    })

}