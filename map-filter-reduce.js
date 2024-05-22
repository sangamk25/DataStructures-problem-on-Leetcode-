// const arr=[10,2,5,2,56];

// // normal function syntax
// // Map is used for the transformation of an array
// const output1 = arr.map(function double(x) {
//   return x*2;
// })

// //arrow function
// const output = arr.map((x) => x.toString (2));

// console.log(output1);
// console.log(output);


// // filter

// const result = arr.filter( function isOdd (x){
//     return x % 2;
// })

// console.log(result);

const arr = [10, 2, 5, 2, 56];
// Reduce - You have to take all the element of array and come out with a single value/ans;

const Output2 = arr.reduce( function findMax ( acc,curr){  

    if(curr>acc){
        acc=curr;
    }
    return acc;

} ,0)

console.log(Output2);


// const Users = [
//   {firstName : "Rahul1",lastName : "sharma" , age : 26},
//   {firstName : "sonia",lastName : "Singh" , age : 76},
//   {firstName : "Rahul3",lastName : "Gandhi" , age : 264},
//   {firstName : "Rahul4",lastName : "Singh" , age : 326}
// ]

// const ans = Users.filter(x=>x.age<30).map(x=>x.firstName);

// console.log(ans);

// const ans1 = Users.reduce( function (acc,curr){

//     if(curr.age<30){
//         acc.push(curr.lastName);
//     }
//     return acc;

// } ,[])

// console.log(ans1);



