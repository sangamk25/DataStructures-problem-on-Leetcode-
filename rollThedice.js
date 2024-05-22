function RollTheCharacter(s, roll) {
  let str = s.split("");
  for (let i = 0; i < roll.length; i++) {
    let Run = roll[i];
    let temp = "";

    for (let j = 0; j < Run; j++) {
      let C = str[j].charCodeAt(0) + 1;
    //   if (C > 122) {
    //     C = 97; // wrap around to 'a' if 'z' is exceeded
    //   }
      temp += String.fromCharCode(C);
    }
    for (let j = Run; j < str.length; j++) {
      temp += str[j];
    }
    str = temp.split("");
  }
  return str.join("");
}
let s = "bca",
  roll = [1, 2, 3];
let result = RollTheCharacter(s, roll);
console.log(result);

