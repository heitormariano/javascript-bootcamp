<<<<<<< HEAD
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove();
    }
=======
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove();
    }
>>>>>>> f3aba555973f28a476cb4250d690021b3cabb220
});