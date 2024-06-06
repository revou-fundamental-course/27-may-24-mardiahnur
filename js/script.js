// ini javascript
document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("name");
    const name = prompt("name anda: ", "");

    if(name) { nameSpan.textContent =name;}
})

let indexSlide = 1;

function nextSlide(n){
    showBanner(indexSlide += n);
}

function showBanner(indexBanner){
    let listImage =document.getElementsByClassName('banner-img');
    if (indexBanner> listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('index ' + (indexSlide - 1) + 'ini adalah index image yang ditampilkan');
}

setInterval(() => nextSlide(1), 3000);

function validateForm() {
    const name = document.getElementById("full-name").value;
    const nip = document.getElementById("nip").value;
    const birthDate = document.getElementById("birth-date").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const messages = document.getElementById("messages").value;

    if (name === "" || nip === "" || birthDate === "" || !gender || messages === "") {
        alert("tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, nip, birthDate, gender.value, messages);
    return false;
}

function setSenderUI(name, nip, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-NIP").innerHTML = nip;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
