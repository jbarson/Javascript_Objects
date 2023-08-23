const teacher = {
    firstName: "Jon",
    favouriteNumber: 42,
    students: { westAug21: 5, anotherClass: 12 },
    funThings: ["toys", "books", "javascript"]
}

//duplicate an object

const newTeacher = teacher

newTeacher.favouriteNumber = 12

console.log(newTeacher.favouriteNumber)
console.log(teacher.favouriteNumber)

const thirdTeacher = {...teacher}

thirdTeacher.favouriteNumber = 99

console.log(thirdTeacher, teacher)

// thirdTeacher.name = "Jon"