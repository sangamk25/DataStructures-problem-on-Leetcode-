function Findunique(  arr1, arr2, Unique ){
          
           for ( let i =0 ; i< arr1.length ; i++){
             let flag = false;
             for (let j = 0; j < arr2.length; j++) {
               if (arr1[i] === arr2[j]) {
                 arr2.splice(j, 1);
                  flag = true;
               } 
             }
             if (flag === false) {
               Unique.push(arr1[i]);
             }
           }
           Unique.push(arr2);
           return Unique;
}
var arr1 = [59, 72, 58, 95, 20, 77, 99];
var arr2 = [72, 51, 59, 20, 80, 67, 89];
var Unique = [];
  const Result = Findunique(arr1, arr2, Unique);
  console.log(Result.flat());
//console.log(Findunique(arr1, arr2, Unique).flat());

// console.log(Findunique(arr1,arr2,Unique).flat());
