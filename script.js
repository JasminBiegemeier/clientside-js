console.log("Hello from javascript")

function sum(a, b) {
    return a + b
}
function division(a, b) {
    return a / b
}

console.log("this is the sum", sum(5, 8), sum(7, 8))
console.log("this is the division", division(9, 3))

let name = "Jasmin"

name = "Jessica"


// This is how TDD works (Test Driven Development)
function calculateFinalPrice(price) {
    const VAT = 1.19

    return price * VAT
}

function testPrice() {
    if (calculateFinalPrice(100) === 119) {
        return "pass"
    } else {
        return "fail"
    }
}

console.log(testPrice())


// A bit on data structures
let firstName = "Jasmin" // this is a String
let dougnouts = 5 // this is a Number
let isHappy = true // this is a Boolean
let houseInFriedichsein = null // this is a Null
let thirdHand = undefined // this is a Undefined


// Arrays
var numbers = [1, 2, 3, 4, 5]


let shoppingCart = []

shoppingCart.push("shoes")
shoppingCart.push("alcohol")

console.log(shoppingCart)
shoppingCart.pop()
console.log(shoppingCart)

// Objects

var human = {
    legs: 2,
    hands: 2,
    hair: true
}


var jasmin = {
    job: "Senior Meat Mover",
    hair: "blonde",
    employed: true,
    siblings: 2,
    hobbies: ["dancing", "swimming", "mimosas"],
    firstName: "Jasmin",
    lastName: "Biegemeier",
    middleName: "Ilse",
    address: "General-Barby-Str.",
    sayHi: function () {
        console.log("Hi, my name is " + this.firstName + " " + this.middleName + " " + this.lastName)
    },
    getHobbies: function () {
        return this.hobbies
    },
    setJob: function (newJob) {
        this.job = newJob
    }
}

function greetings() {
    console.log("Hello Coders")

    // I create an empty p element
    let paragraph = document.createElement("P")

    // I add my content to the p element (mimossas)
    paragraph.innerText = jasmin.hobbies[2]

    // I append my p element to the html document
    document.body.appendChild(paragraph)

}


function showHobbies() {
    let hobbies = document.getElementById("hobbies")
    for (let i = 0; i < jasmin.hobbies.length; i++) {
        renderString(jasmin.hobbies[i])
    }
}

function onClick() {
    greetings()
    showHobbies()
}

function renderString(string) {
    let word = document.createElement("p")
    word.innerText = string
    word.style.padding = "0.5rem"
    document.body.appendChild(word)
}


function onChange(e) {
    console.log(e)
    renderString(e.target.value)
}

document.getElementById("main-button").addEventListener("click", onClick)
document.getElementById("first-name").addEventListener("keypress", onChange)

//find out how to make input appear in real time as one word

// use mozilla mdn