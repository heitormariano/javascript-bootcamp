document.querySelector('#search-text').addEventListener('input', function (e) {
    document.querySelector('#search-result').textContent = e.target.value;
});
