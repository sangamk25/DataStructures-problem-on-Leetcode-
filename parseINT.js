// var str = "756";
// var intValue = 0;

// for (var i = 0; i < str.length; i++) {
//   intValue = intValue * 10 + (str.charCodeAt(i) - "0".charCodeAt(0));
// }

// console.log(intValue); // Output: 756
// let str = "nikhil";
// console.log(str.map(ind => ind.UpperCase()));



//  function sayHello(name) {
  
//    console.log("Hello, " + name + "!");
    
// }

// let greeting = sayHello("Alice");
// console.log(greeting);
// Output:
// Hello, Alice!
// undefined


// function calculateAreaAndPerimeter(length, width) {
//   let area = length * width;
//   let perimeter = 2 * (length + width);

//   return { Area: area, Perimeter: perimeter };
// }

// let result = calculateAreaAndPerimeter(5, 3);
// console.log(result);


const colors = ['red','green' , 'blue' , 'yellow',];




//Adding Elements: The push and unshift methods allow you to add elements to the end and beginning of an array, respectively.

colors.push('orange');
colors.unshift('white');
console.log(colors); // ["white", "red", "blue", "purple", "yellow"]

//Removing Elements: The pop and shift methods remove elements from the end and beginning of an array, respectively.

// //colors.pop();
// colors.shift();
// console.log(colors); // ["red", "blue", "purple", "yellow"]

// // Concatenating Arrays: The concat method merges two or more arrays into a new one.

// const moreColors = ['brown', 'gray'];
// const allColors = colors.concat(moreColors);
// console.log(allColors); // ["red", "pink", "teal", "purple", "yellow", "brown", "gray"]
  