const Singleton = (function (){
    let instance;

    function createInstance (){

        const object = new Object();
        object.someProperty ="I am S";
        return object;
    }

    return {
      
        
        getInstance : function (){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    } 
})();

const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

console.log(singletonA === singletonB);