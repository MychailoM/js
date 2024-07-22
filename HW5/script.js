// let drinksName;
// const drinks = 'Чай'

// switch (drinks) {
//     case "Кава":
//         drinksName = "Кава";
//         break;

//     case "Чай":
//         drinksName = "Чай";
//         break;

//     case "Сік":
//         drinksName = "Сік";
//         break;
    
//     default:
//         console.log('Ви не ввели назви напою!');
// }

// alert(drinksName);


function checkFieldTwo() {
    const fielNumOne = parseFloat(document.getElementById("num-one").value);
    const fielNumTwo = parseFloat(document.getElementById("num-two").value);
    if (fielNumOne + fielNumTwo > 10) {
    alert("сума більше 10");
    } else {
    alert("сума менша або дорівнює 10");
    }
}