//Given an array of objects representing students' scores in different subjects,
 //find the average score for each subject and then calculate the overall average score across all subjects.

const students = [
  { name: "Alice", math: 90, science: 85, english: 88 },
  { name: "Bob", math: 82, science: 88, english: 90 },
  { name: "Charlie", math: 95, science: 92, english: 85 },
];

const sumMath = students
  .map((student) => student.math)
  .reduce((acc, curr) => acc + curr, 0);
const sumScience = students
  .map((student) => student.science)
  .reduce((acc, curr) => acc + curr, 0);
const sumEnglish = students
  .map((student) => student.english)
  .reduce((acc, curr) => acc + curr, 0);

  

const averageMath = sumMath / students.length;
const averageScience = sumScience / students.length;
const averageEnglish = sumEnglish / students.length;

const overallAverage = (averageMath + averageScience + averageEnglish) / 3;

console.log("Average Math Score:", averageMath.toFixed(2));
console.log("Average Science Score:", averageScience.toFixed(2));
console.log("Average English Score:", averageEnglish.toFixed(2));
console.log("Overall Average Score:", overallAverage.toFixed(2));
