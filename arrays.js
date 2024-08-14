const fruits = ["apple", "banana", "cheery","mango","orange"]
console.log(fruits)

//accessing elements using indexes
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[4])

// push() method on array instances add the specified element at the end of the array
fruits.push("watermelon")
console.log(fruits)

//pop() method in array instances removes the last element of the array and return that element
fruits.pop()
console.log(fruits)

//shift () method - removes the first element from the array and returns that element
fruits.shift()
console.log(fruits)

//unshift() method - adds the specified element at the beginning of the array
fruits.unshift("apple")
console.log(fruits)

//slice and splice method
console.log(fruits.slice(0,4))
console.log(fruits.slice(1,3)) // array.slice(start,end)-start is inculded but end is not included
console.log(fruits.slice(-1))
console.log(fruits.slice(2,-1))

/*  The splice() method of Array instances changes the contents of an array by removing or 
replacing existing elements and/or adding new elements in place  */
console.log(fruits.splice(1,3))
console.log(fruits)


/* The concat() method of Array instances is used to merge two or more arrays.
  This method does not change the existing arrays, but instead returns a new array. */

const flowers = ["tulips","marigold","daisy"]
const trees = ["banyan","mango tree"]
trees.concat(flowers)
const array1= trees.concat(flowers)
console.log(flowers)
console.log(trees)
console.log(array1)

// spread operator 
const array2=[...flowers,...trees]
console.log(array2)

const array3 = [1, 2, 3, [4, 5, 6 ], 7, [8, 9, [1,2]]]
const real_Array= array3.flat(Infinity)
console.log(real_Array)

//to check if the data entered is array or not
console.log(Array.isArray("ponyo"))

// to convert the input into array
console.log(Array.from("ponyo"))
console.log(Array.from({name:"ponyo"})) //*

//of returns a new array from a set of elements

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
