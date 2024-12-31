// const list = document.querySelector(".element_list");
// const input = document.getElementById("input");
// const btn = document.getElementById("button");
// const text = document.querySelector(".text");

// function getItem() {
//     const itemText = input.value.trim();
//     if (itemText === '') {
//         text.style.display = 'block';
//     }else{text.style.display = "none";}

//     const li = document.createElement('li');
//     li.textContent = itemText;

//     list.appendChild(li);
//     input.value = '';
// };

// btn.addEventListener('click', getItem);
// input.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         getItem();
//     }
// })


// const images = [
//     "https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];


// function addImages(images) {
//     const box = document.getElementById('gallery');
//     images.forEach((imageSrc) => {
//         const img = document.createElement('img')
//         img.src = imageSrc;
//         img.alt = 'photo';
//         img.style.width = '300px'
//         box.appendChild(img);
//     });
// };

// addImages(images);


// const message = document.getElementById('message');
// const curentTarget = document.getElementById('key');
// const newGameButton = document.getElementById("newGameButton");

// const keys = ["q", "w", "e", "r", "t", "y", "a", "s", "d", "f", "g"];

// let curentKeyIndex = 0;
// let curentKey;

// function randomKey() {
//     curentKeyIndex = Math.floor(Math.random() * keys.length);
//     curentKey = keys[curentKeyIndex];
//     curentTarget.textContent = curentKey;
//     message.textContent = "натисніть правилькуклавішу  ";
//     message.appendChild(curentTarget);
// };

// function newGame() {
//     randomKey();
// };

// function keyCheck(event) {
//     if (event.key === curentKey) {
//         message.textContent = 'правильно';
//         randomKey()

//     } else {
//         message.textContent = "помилка";
//         message.appendChild(curentTarget);
//     }
// }

// function preventDefaultAction(event) {
//     event.preventDefault();
// }

// window.addEventListener('keydown', keyCheck);
// window.addEventListener("keydown", preventDefaultAction);
// newGameButton.addEventListener('click', newGame)



const btnAdd = document.getElementById('add');
const btnMinus = document.getElementById('minus');
const text = document.getElementById('text');

function addSize() {
    let size = parseInt(window.getComputedStyle(text).fontSize);
    text.style.fontSize = (size + 2) + 'px';
}

function minusSize() {
    let size = parseInt(window.getComputedStyle(text).fontSize);
    text.style.fontSize = (size - 2) + "px";
}

btnAdd.addEventListener('click', addSize);
btnMinus.addEventListener('click', minusSize);