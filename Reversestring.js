function reverseWords(S) {
  let result = "";
  let wordEnd = S.length;
  let wordStart = S.length - 1;

  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === ".")
     {
      wordStart = i + 1;
      result += S.substring(wordStart, wordEnd) + ".";
      wordEnd = i;
    }
  }

  result += S.substring(0, wordEnd);

  return result;
}

// Example usage:
const S1 = "i.like.this.program.very.much";
console.log(reverseWords(S1)); // Output: much.very.program.this.like.i

const S2 = "pqr.mno";
console.log(reverseWords(S2)); // Output: mno.pqr



//