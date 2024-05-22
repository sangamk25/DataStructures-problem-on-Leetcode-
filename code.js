 function findRequiredCoins (N){
   

    const indianCurrency = [2000,1000,500,100,50,20,10,5,2,1];

    const coinsNeeded = [];

    for (let i= 0 ; i< indianCurrency.length ; i++) {
    
       while( N >= indianCurrency[i]){
        coinsNeeded.push(indianCurrency[i]);
        N -= indianCurrency[i];
       }
    }
    return coinsNeeded;
 }

const N = 5001;
const RequiredCoins  = findRequiredCoins (N);

console.log(RequiredCoins);


 
