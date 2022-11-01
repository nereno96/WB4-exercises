"use strict"

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

let numCourses = courses.length
let cheapCourses = []
let class1 = []
for (let i = 0; i < numCourses; i++) {
    if (courses[i].CourseId == "PROG200") {
        console.log("The PROG200 course starts " + courses[i].StartDate);
    }
    if (courses[i].CourseId == "PROJ500") {
        console.log("The title of the PROJ500 course is " + courses[i].Title);
    }
    if (Number(courses[i].Fee) <= 50) {
        cheapCourses.push(courses[i].Title);
    }
    if (courses[i].Location == "Classroom 1") {
        class1.push(courses[i].Title);
    }
}
console.log(cheapCourses);
console.log(class1);