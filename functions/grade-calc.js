
//create the factory function for student objects
let createStudent = function (name, score) {
    return {
        name: name,
        score: score
    };
};

let calcResult = function (name, score, totalScore) {
    // 90 - 100 (A), 80 - 89 (B), 70 - 79 (C), 60 - 69 (D), 0 - 59 (F)
    let percent = score / totalScore * 100;
    let result;
    if (percent >= 90) { // A concept
        result = 'A';
    } else if (percent >= 80) { //B concept
        result = 'B';
    } else if (percent >= 70) { // C concept
        result = 'C';
    } else if (percent >= 60) { // D concept
        result = 'D';
    } else { //F concept
        result = 'F';
    }

    return `The student ${name} got the following result: ${result}`;
};

let getScoreByStudent = function (student, totalScore) {
    let name;
    let score;
    if (student !== undefined && student !== null) {
        for (const prop in student) { //teste
            if (student.hasOwnProperty(prop)) {
                if (typeof (student[prop]) === 'string') {
                    name = student[prop];
                } else if (typeof (student[prop]) === 'number') {
                    score = student[prop];
                    return calcResult(name, score, totalScore);
                }
            }
        }
    } else {
        return 'Student undefined or does not exist';
    }
};

let calcScore = function (students = [], totalScore) {
    if (students !== null && students !== undefined && totalScore !== null && totalScore !== undefined) {
        if (students.length !== 0 && totalScore !== 0) {
            for (const elem of students) {
                console.log(getScoreByStudent(elem, totalScore));
            }
        } else {
            console.log('List empty or total score with value 0');
        }
    } else {
        console.log('list or total score has not been defined');
    }
};

//create several objects
let marcos = createStudent('Marcos', 7);
let andrea = createStudent('Andrea', 17);
let mateus = createStudent('Mateus', 18);
let maria = createStudent('Maria', 12);

//Include the created objects in a list
const studentsList = [marcos, andrea, mateus, maria];

//calculate the score for each student (the total score needs to be defined)
// Total score = 20
calcScore(studentsList, 20);