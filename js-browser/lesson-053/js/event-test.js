const incrementAge = function () {
    let elemAge = document.getElementById('age-02');
    age = parseInt(elemAge.firstChild.nodeValue);
    age += 1;
    elemAge.firstChild.nodeValue = age.toString();
};

let table = document.getElementById('userInfo');
table.addEventListener('click', incrementAge);
