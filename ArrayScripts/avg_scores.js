"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let numScores = scores.length;
    let i = 0;
    let total = 0;
    while (i < numScores) {
        total += scores[i];
        i++
    }
    let avg = total/numScores;
    return avg;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));