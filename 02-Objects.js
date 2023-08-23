// Why Objects?

// Store Data
// key value pairs

const teacherArray = ["Jon", "Teal", "None of your business", 42]
const studentArray = ["Maxime", "orange", 24, 7]

const teacherObject = new Object()

teacherObject.firstName = "Jon"
teacherObject.favouriteColor = "Teal"

const studentObject = {
    favouriteColor: "orange",
    firstName: "Maxime"
}


// console.log(teacherObject)
// console.log(studentObject)

// console.log( "primitives", "Jon" === "Jon")

const studentObject2 = {
    favouriteColor: "orange",
    firstName: "Maxime"
}

// console.log("objects", studentObject === studentObject2)

studentObject.number = 7

// console.log(studentObject, studentObject2)

const thirdStudent = studentObject

console.log("by reference", thirdStudent === studentObject)

studentObject.age = 24

console.log(thirdStudent)

teacherObject.students = {westAug21: 5}

console.log(teacherObject)

console.log(teacherObject.students.westAug21)

teacherObject.funThings = ["toys", "books", "javascript"]

console.log(teacherObject.funThings[1])

const cohort = "westAug21"

console.log(teacherObject.students[cohort])