// const button = document.querySelector('.btn');
// button.addEventListener('click', () => {
//     alert('подія клік');
// });

// button.removeEventListener("click", () => {
//     console.log("видалення слухача");
// });



// const addBtn = document.querySelector('button[data-action="add"]');
// const removeBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//     alert('click event lisener');
// };

// addBtn.addEventListener('click', () => {
//     btn.addEventListener('click', handleClick);
// });

// removeBtn.addEventListener('click', () => {
//     btn.removeEventListener('click', handleClick);
// });



// const btn = document.querySelector('#btn');

// const handleClick = event => {
//     console.log('event: ', event);

//     console.log('event-type: ', event.type);

//     console.log('this: ', this);

//     console.log('target: ', event.target);
// };

// btn.addEventListener('click', handleClick)



// const form = document.querySelector('.form');
// const loginInput = form.querySelector('input[type="text"]');
// const passwordInput = form.querySelector('input[type="password"]');


// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const logIn = loginInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (logIn === '' || password === '') {
//         return alert('введіть правильні данні')
//     }

//     form.reset();

//     alert('дякуємо за реєстрацію')
// }



// const button = document.querySelector('.btn');
// button.addEventListener('click', () => {
    

//     if (button.style.backgroundColor === 'brown') {
//         button.style.backgroundColor = "blue";
//     } else {
//         button.style.backgroundColor = "brown";
//     }
// })



const form = document.querySelector(".form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Ви зареєструвалися успішно! Дякую!');
})