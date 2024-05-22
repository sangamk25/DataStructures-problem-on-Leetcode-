function countSentences (text){  

    let count =0;

 text.split('').forEach ( (element) => {
           
        if(['!','?','.'].includes(element)){
                count++;
        }        
 });
 return count;

}


const text =
  "This is a sample text.It requires multiple steps.It contains multiple sentences! Can you count them?";

  const sentenceCount = countSentences(text);

  console.log(`The text contains ${sentenceCount} sentences.`);