// document.addEventListener('keydown', event => {
//     console.log('keydown', event)
// })

// document.addEventListener("keyup", (event) => {
//     console.log("keyup", event);
// });

// document.addEventListener('keydown', event => {
//     console.log('key: ', event.key);
//     console.log("code: ", event.code);
// });

// document.addEventListener('keydown', event => {
//     event.preventDefault();
//     if ((event.ctrlKey || event.metaKey) && event.code === 'KeyD') {
//         console.log('ctrl + d or Command + d combo');
//     }
// })


// const inp = document.getElementById('input');
// const outp = document.getElementById("message");

// document.addEventListener('keypress', event => {
//     outp.textContent = inp.value;
// });


// const box = document.getElementById('box');
// document.addEventListener('keydown', event => {
//     if (event.key === 'g') {
//         box.style.backgroundColor = 'green'
//     } else if (event.key === 'y') {
//         box.style.backgroundColor = "yellow";
//     } else if (event.key === "r") {
//         box.style.backgroundColor = "red";
//     } else{box.style.backgroundColor = "gray";}
// });


// const btn = document.querySelector(".js-clear");
// const outp = document.querySelector(".output");
// document.addEventListener('keydown', event => {
//     outp.textContent += event.key;
// });

// btn.addEventListener('click', () => {
//     outp.textContent = '';
// });

const box = document.getElementById("box");
let positionLeft = 50;
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        positionLeft -= 2;
    } else if (event.key === 'ArrowRight') {
        positionLeft += 2;
    }

    box.style.left = positionLeft + '%';
})