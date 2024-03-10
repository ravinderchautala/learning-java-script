/*
=========================
Array Methods Challenge-9
=========================
*/

const updatedStudents = students.map(function (student) {
    student.role = 'student';
    return student;
})
// console.log(students);

const highScores = students.filter(function (student) {
    if (student.score >= 80) {
        return student;
    }
})
// console.log(highScores);

const specificId = students.find(function (student) {
    return student.id;
})
// console.log(specificId);

const avgScore = students.reduce(function (scoreTotal, student) {
    scoreTotal += student.score;
    return scoreTotal;
}, 0) / students.length;

// console.log(avgScore);

const survey = students.reduce(function (survey, student) {
    const favsubject = student.favouriteSubject;
    if (survey[favsubject]) {
        survey[favsubject] = survey[favsubject] + 1;
    } else {
        survey[favsubject] = 1;
    }
    return survey;
}, {})

console.log(survey);