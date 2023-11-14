// TRADITIONAL FUNCTIONS
function greet() {
    console.log("hi")
}

function echo(str) {
    return str
}

function add(a, b) {
    return a + b
}

function print_and_add(a, b) {
    console.log("printing")
    return a + b
}

console.log("TRADITIONAL")
greet()
console.log(echo("bye"))
console.log(add(3, 4))
console.log(print_and_add(3,4))
console.log()

// LAMBDA METHODS
greet2 = () => console.log("hi")
echo2 = (str) => str
// echo2 = str => str // alternate
// echo2 = (str) => { return str } // alternate 2
add2 = (a, b) => a + b
print_and_add2 = (a, b) => 
    {
        console.log("printing")
        return a + b
    }

console.log("LAMBDA")
greet2()
console.log(echo2("bye"))
console.log(add2(3, 4))
console.log(print_and_add2(3,4))
console.log()

console.log("ARRAY")
arr = [10, 20, 30, 40, 50]
arr2 = [110, 120, 130, 140, 150]

console.log("Adding")
// Adding a single element to an array
console.log([...arr, 60])
// Adding multiple elements
console.log([...arr, 60, 70])
// Concatenating two arrays
console.log(arr.concat(arr2))
// console.log([...arr, ...arr2])
console.log()

console.log("Filter")
// Removing a specifing element
console.log(arr.filter(elem => elem != 20))
console.log(arr.filter((_, index) => index != 1))
console.log(arr.filter((_, index, original_arr) => original_arr[index] != 20))
// Removing multiple elements
console.log(arr.filter(elem => (elem / 10) % 2 == 0))
console.log(arr.filter((_, index) => index % 2 == 1))
console.log(arr.filter((_, index, original_arr) => (original_arr[index] / 10) % 2 == 0))
console.log()

console.log("Slice")
// grabbing a certain slice of an array
console.log(arr.slice(3))
console.log(arr.slice(1,4))
console.log()

console.log("Map")
console.log(arr.map(elem => elem / 10))
// below is a ternary in the lambda: if index < 3 do elem / 10 else do elem * 10
console.log(arr.map((elem, index) => index < 3 ? elem / 10 : elem * 10)) 
console.log(arr.map((elem, index, _) => index < 3 ? elem / 10 : elem * 10)) 
console.log()

// Object manipulation
obj = {"k": {"a": 1, "b": 2}, "c": 3}

console.log("OBJECT")
// Adding and updating
console.log({...obj, "d": 4})
console.log({...obj, "c": 9000})
console.log({...obj, "k": {...obj["k"], "d":4}})
console.log({...obj, "k": {...obj["k"], "b":42}})
// Removing
const {c, ...obj2} = obj
console.log(obj2)
const {a, ...obj3} = obj["k"]
console.log({...obj, "k": obj3})