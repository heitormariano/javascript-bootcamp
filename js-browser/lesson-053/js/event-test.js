<<<<<<< HEAD
const incrementAge = function () {
    let elemAge = document.getElementById('age-02');
    age = parseInt(elemAge.firstChild.nodeValue);
    age += 1;
    elemAge.firstChild.nodeValue = age.toString();
};

let table = document.getElementById('userInfo');
=======
const incrementAge = function () {
    let elemAge = document.getElementById('age-02');
    age = parseInt(elemAge.firstChild.nodeValue);
    age += 1;
    elemAge.firstChild.nodeValue = age.toString();
};

let table = document.getElementById('userInfo');
>>>>>>> f3aba555973f28a476cb4250d690021b3cabb220
table.addEventListener('click', incrementAge);