//1
function checkFields() {
    const fielValueOne = document.getElementById("text-one").value;
    const fielValueTwo = document.getElementById("text-two").value;
    if (fielValueOne !== "" && fielValueTwo !== "") {
        alert('всі поля заповнені');
    } else {
        alert('не всі поля заповнені');
    }
}


//2
function checkFieldsTwo() {

    const fielNumOne = parseFloat(document.getElementById("num-one").value);
    const fielNumTwo = parseFloat(document.getElementById("num-two").value);
    if (fielNumOne + fielNumTwo > 10) {
        alert('сума більше 10');
    } else {
        alert("сума менша або дорівнює 10");
    }
}

//3
function checkFieldsThree() {
    const fielText = document.getElementById("text-check").value;
    if (fielText.includes("JavaScript") || fielText.includes("JS") || fielText.includes("ECMAScript")) {
        alert('речення містить назву Java Script');
    } else {
        alert("речення не містить назву Java Script");
    }
};

//4
function checkFieldsFour() {
    const fielNumFour = document.getElementById("num-three").value;
    if (fielNumFour >= 10 && fielNumFour <= 20) {
        alert(`число ${fielNumFour} не входить в діапазон від 10 до 20`);
    } else {
        alert(`число ${fielNumFour} входить в діапазон від 10 до 20`);
    }
}

//5
function checkForm() {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("password").value;

    if (name.length > 2 && mail.includes("@") && pass.length > 5) {
        window.location.href = "#";
        alert("Ви успішно авторизувалися")
    } else {
        alert("Форма не заповнена згідно вимог сайту");
    }
}
