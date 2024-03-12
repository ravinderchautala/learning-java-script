/*
=========================
Array Methods Challenge-9
=========================
*/

const updatedStudents = students.map(function (student) {
    return student.role = 'Student';
})
// console.log(students);

const highScores = students.filter(function (student) {
    return student.score >= 90
})
// console.log(highScores);

const specificId = students.find(function (student) {
    return student.id === 1;
})
// console.log(specificId);


const avgScore = students.reduce(function (score, student) {
    return score += student.score;
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