"use strict"

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];
let numStudents = students.length;

for (let i = 0; i < numStudents; i++) {
    let total = 0;
    let avg = 0;
    let numScores = students[i].scores.length;
    for (let j = 0; j < numScores; j++) {
        total += students[i].scores[j];
    }
    avg += (total / numScores);
    console.log(students[i].name + ": " + avg);
}