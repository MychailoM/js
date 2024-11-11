// const btn = document.querySelector('.btn');

// const area = function (w, h) {
//     if (h === '' || w === '') {
//         return alert(w * w || h * h);
//     } else if (h != '' && w != '') {
//         return alert(w * h);
//     }
// };

// btn.addEventListener("click", () => {
//     area(document.querySelector('.width').value , document.querySelector(".height").value);
// });



const button = document.querySelector(".btn");

const totalPrice = function (price, discount) {
    
    return alert(price - price * (discount / 100));
};

button.addEventListener("click", () => {
    totalPrice(
    document.querySelector(".price").value,
    document.querySelector(".discount").value
    );
});