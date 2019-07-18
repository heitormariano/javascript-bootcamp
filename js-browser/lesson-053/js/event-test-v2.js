const modifyUserName = function (idElem, value) {
    if (typeof (idElem) === 'string' && typeof (value) === 'string') {
        let elem = document.getElementById(idElem);
        if (elem.firstChild.nodeValue == 'Tompson') {
            elem.firstChild.nodeValue = value;
        } else {
            elem.firstChild.nodeValue = 'Tompson';
        }
    }
};

let table = document.getElementById('userInfo');
table.addEventListener('click', () => { modifyUserName('user-01', 'Batatation') }); // arrow function used
//table.addEventListener('click', function () { modifyUserName('user-01', 'Batatation') });
