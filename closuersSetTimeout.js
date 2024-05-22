//Closures is a function bunddled together with lexical environment 
//function along with lexical scope forms a clousuers
//function y bind to the variables x ,its form a closures and it has acces to its parent lexical scope
// a closures gives you access to an outer function scope from inner function

function x (){
    var a =7;
    function y (){
        console.log(a);
    }

    //var a =100;
   return y;
}

var z = x();
console.log(z);

z();

function sum () {  

   for (let i =1 ;i<=5 ; i++){
      setTimeout( function (){
         console.log(i);
      } , i*1000);  
    }
}  
sum ();

