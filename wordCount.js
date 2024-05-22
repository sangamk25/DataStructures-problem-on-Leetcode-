const wordFrequency = (text) => {
  const words = text.split(" ");
  const wordCount = [];

  words.forEach((element) => {
    const lowerCaseWord = element.toLowerCase();
    if (wordCount[lowerCaseWord]) {
      wordCount[lowerCaseWord]++;
    } else {
      wordCount[lowerCaseWord] = 1;
    }
  });

  return wordCount;
};

// const wordFrequency = (text) => {

//   const words = text.split(" ");
//   const wordCount = {};

//   words.forEach((word) => {
//     const lowerCaseWord = word.toLowerCase();

//     if (wordCount[lowerCaseWord]) {
//       wordCount[lowerCaseWord]++;
//     } else {
//       wordCount[lowerCaseWord] = 1;
//     }
//   });

//   return wordCount;
// };

const inputText =
  "Database Management System is a software or technology used to manage data from a database. Some popular databases are MySQL, Oracle, MongoDB, etc. DBMS provides many operations  creating a database, Storing in the database, updating an existing database, delete from the database. DBMS is a system that enables you to store, modify and retrieve data in an organized way. It also provides security to the database. ";
const wordFrequencyResult = wordFrequency(inputText);
console.log("Word Frequency:", wordFrequencyResult);
//   const result = wordFrequency(inputText);
//   console.log("Word Frequency :"result);
