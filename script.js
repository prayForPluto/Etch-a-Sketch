let htmlElements = "";
for (let i = 0; i < 256; i++) {
    htmlElements += '<div class="box"></div>';
}

let container = document.querySelector('.container');
container.innerHTML = htmlElements;