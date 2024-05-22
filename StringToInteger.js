  function ConvertToInteger ( str){
       
    console.log(typeof(str));
    let ans = 0;
    for( let i = 0 ; i< str.length;i++){

        ans = 10*ans + str.charCodeAt(i)-'0'.charCodeAt(0);
    }
    return ans ;
  } 
   let str = "756";
   let result = ConvertToInteger( str);
console.log(typeof(result));
console.log(result);