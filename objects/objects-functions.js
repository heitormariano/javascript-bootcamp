let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

// bookSummary
console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);

//otherBookSummary
console.log(otherBookSummary.summary);
console.log(otherBookSummary.pageCountSummary);