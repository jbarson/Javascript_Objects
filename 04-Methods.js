const teacher = {
    firstName: "Jon",
    favouriteNumber: 42,
    students: { westAug21: 5, anotherClass: 12 },
    funThings: ["toys", "books", "javascript"]
}

teacher.funThings[2]
// will equal "javascript"

teacher.saying = function() {
    console.log("Hello Nurse")
}

// console.log(teacher)

// teacher.saying()

// THIS

teacher.whatIsThis = function() {console.log(this)}

// teacher.whatIsThis()

// console.log(this)

teacher.students.total = function() {
    let totalNumber = 0
    for (let key in this) {
        if (typeof this[key] === "number"){
            totalNumber += this[key]
        }
    }
    console.log(totalNumber)
}

teacher.students.total()
